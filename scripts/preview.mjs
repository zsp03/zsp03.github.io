import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "js-yaml";
import { Liquid } from "liquidjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4000);
const engine = new Liquid();

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2"
};

async function renderIndex() {
  const template = (await readFile(path.join(root, "index.html"), "utf8"))
    .replace(/^---\n[\s\S]*?\n---\n/, "");
  const projects = load(await readFile(path.join(root, "_data/projects.yml"), "utf8"));
  return engine.parseAndRender(template, { site: { data: { projects } } });
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = decodeURIComponent(url.pathname);

    if (pathname === "/" || pathname === "/index.html") {
      const html = await renderIndex();
      res.writeHead(200, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      });
      res.end(html);
      return;
    }

    const filePath = path.join(root, path.normalize(pathname));
    if (!filePath.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const info = await stat(filePath);
    if (info.isDirectory()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const data = await readFile(filePath);
    res.writeHead(200, {
      "content-type": types[path.extname(filePath)] || "application/octet-stream"
    });
    res.end(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    console.error(error);
    res.writeHead(500);
    res.end("Preview error");
  }
});

server.listen(port, () => {
  console.log(`Preview: http://localhost:${port}`);
});
