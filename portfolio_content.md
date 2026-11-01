# Zulfiqry Saadputra, S.T.
**PORTOFOLIO PROJECT**

---

## 1. Portal Alumni
**Intern Project (Apr - Jun 2023)**
**Client:** Direktorat Hubungan Alumni - Universitas Hasanuddin

* **Tech Stack:** PHP | Laravel | MySQL | Drive API | Mailing
* **Role:** Backend Developer & System Architect

**Description:**
Sebuah aplikasi web yang berfungsi sebagai portal informasi terpusat. Sistem ini dilengkapi dengan Content Management System (CMS) kustom yang dirancang secara khusus untuk memfasilitasi publikasi berita di halaman utama serta distribusi lowongan. Terdapat juga fitur Database Alumni yang dapat diakses oleh seluruh alumni.

**Responsibilities:**
Saya bertanggung jawab penuh atas pemrograman inti dan perancangan arsitektur sistem web ini secara keseluruhan. Fokus saya adalah mengembangkan backend yang aman untuk mengorganisir, menyimpan, dan memelihara database rekam jejak alumni, serta memastikan keseluruhan sistem CMS dapat digunakan dengan mudah dan lancar oleh admin pengelola.

*[Image Placeholder: Portal Alumni Homepage & News/Events]*
*[Image Placeholder: Portal Alumni Job Vacancies & Survey]*
*[Image Placeholder: Portal Alumni Messaging Interface]*

---

## 2. Sistem Monitoring Publikasi
**Intern Project (Agu - Des 2023)**
**Client:** Departemen Teknik Informatika - Universitas Hasanuddin

* **Tech Stack:** PHP | Laravel | Filament | MySQL | Excel | Linux | CI/CD
* **Role:** Backend Developer & Deployment Manager

**Description:**
Sistem berupa aplikasi berbasis web untuk menyimpan seluruh publikasi dosen, serta mahasiswa yang terlibat. Website ini juga menyediakan fitur import otomatis untuk data publikasi dosen dari file Excel, serta dilengkapi dengan fitur pencarian yang komprehensif.

**Responsibilities:**
Sebagai backend developer, saya berkolaborasi erat dengan tim untuk merancang logika database dan membangun sistem yang fungsional. Selain pengembangan fitur, saya memegang tanggung jawab penuh dalam manajemen deployment aplikasi dengan mengonfigurasi dan mengimplementasikan pipeline CI/CD.

**Development Workflow:**
1. Analisis Format File
2. Melakukan Pembersihan Data Publikasi
3. Menampilkan Data Publikasi
4. Melakukan Pengkodean Proses Import
5. Menyambungkan Database Aplikasi

*[Image Placeholder: Sistem Monitoring Publikasi Dashboard (Jurnal, Prosiding, Pengabdian, Penelitian)]*
*[Image Placeholder: Excel File Format Analysis]*
*[Image Placeholder: System Architecture & Database Relational Model]*

---

## 3. Sistem Informasi untuk Kader Posyandu
**Research Project**

* **Tech Stack:** PHP | Laravel | Linux | CI/CD
* **Role:** Developer (Coding, Testing, Deployment)

**Description:**
Aplikasi berbasis website yang dibangun untuk mendigitalisasi pencatatan Buku SIP (Sistem Informasi Posyandu) yang sebelumnya dilakukan secara manual. Sistem ini mengelola data gizi balita secara terpusat dan menampilkannya dalam bentuk visualisasi grafik sesuai standar WHO — seperti perbandingan Tinggi Badan terhadap Umur (TB/U) — guna memudahkan pemantauan dan deteksi dini stunting pada anak.

**Responsibilities:**
Saya bertugas dalam proses penulisan kode (coding) sistem, dan bertanggung jawab penuh pada tahap testing hingga deployment aplikasi.

*[Image Placeholder: Posyandu Dashboard displaying Data Anak and WHO Standard Charts (Tinggi Badan Terhadap Umur)]*

---

## 4. Autentikasi Tiket berbasis QR Code dengan ESP32-CAM dan Webserver
**Personal Project**

* **Tech Stack:** ESP32 | C++ | PHP | Laravel | WebSockets (Livewire, Laravel Echo)
* **Role:** Fullstack IoT & Web Developer

**Description:**
Sistem verifikasi tiket real-time berbasis IoT untuk mencegah pemalsuan tiket acara. Proyek ini memadukan perangkat keras pemindai mandiri dengan dasbor pemantauan web yang responsif.

**System Architecture & Workflow:**
Memanfaatkan arsitektur client-server. Pemrosesan dan decoding gambar QR Code dilakukan secara lokal di dalam mikrokontroler menggunakan library Quirc C++. ESP32-CAM membaca QR Code dan menembak API server. Server memvalidasi tiket dan mengirimkan status secara real-time ke dasbor admin menggunakan protokol WebSocket (Laravel Echo), tanpa perlu memuat ulang (refresh) halaman.

Sistem juga dilengkapi indikator respons instan pada hardware:
* **Tiket Valid (Kode 200):** LED menyala & Buzzer bunyi 2x.
* **Tiket Ditolak (Kode 404):** Buzzer bunyi 1x.

*[Image Placeholder: ESP32-CAM Scanning QR Code via Smartphone]*
*[Image Placeholder: System Architecture Diagram (ESP32 -> Laravel Server -> Database -> WebSockets/Livewire)]*
*[Image Placeholder: Hardware Breadboard Setup with LED and Buzzer]*