## Penjelasan Web Aplikasi

Web Aplikasi ini berisi dua halaman utama, yaitu halaman utama/landing page dan halaman detail.

Halaman utama/landing page terdiri dari sebuah Card yang memiliki header dan body. Pada header terdapat teks terkait cardnya dan juga terdapat Search, Filter by Type, dan Filter by Status, kemudian di dalam Body dari Card tersebut terdapat daftar Anime yang saya bagi menjadi dua kolom, yang mana daftar tersebut menampilkan poster, judul, rating/score, tanggal rilis dari daftar Anime tersebut. Total data saat pertama kali Web Aplikasi di buka adalah 20 data. Setiap daftar Anime dapat di klik di bagian manapun untuk mengarahkan ke halamn detail dari Anime yang telah diklik sebelumnya, kemudian di bawah daftar Anime terdapat pagination yang mana dapat mengubah banyaknya data pada halaman utama/landig page setelah dimuat, lalu dapat berpindah hasil data ketika memilih pagination kedua, ketiga dan seterusnya.

Halaman Detail Anime terdapat 5 Section/Card, berikut penjelasannya:

- Section/Card berfungsi sebagai action untuk kembali ke halaman utama/landing page, pada section/card ini biasa juga disebut sebagai Breadcrumb.
- Section/Card berfungsi sebagai informasi yang mana terdapat informasi poster, judul, sinopsis, genre, dan rating/scored.
- Section/Card berfungsi sebagai informasi yang mana terdapat detail singkat dari Anime yang di pilih seperti judul versi Jeang, judul versi Inggris,Status,
  Type, Source, Durasi, Total Episode, Studio, Producers dan Tanggal rilis.
- Section/Card berfungsi sebagai informasi video trailer dari Anime yang di pilih. (Jika video trailer dari Anime yang di pilih ada)
- Section/Card berfungsi sebagai informasi rekomendasi daftar Anime berdasarkan Anime yang telah dipilih sebelumnya, pada section/card ini terdapat sebuah card lagi
  yang terdiri dari poster dan judul Anime, daftar rekomendasi juga dapat di klik untuk menampilkan detail Anime tersebut kembali.

Halaman detail ini terinspirasi dari situs Anime seperti **Samehadaku**, **Oplovers**, dan **Otakudesu**.

Untuk improvement, proyek ini hanya menggunakan unit testing sederhana. Saya belum dapat menguji fungsi-fungsi dari pemanggilan API menggunakan Axios atau yang lainnya. Ini adalah pertama kalinya saya menggunakan unit testing dengan Jest pada Next JS karena saya belum pernah mengimplementasikan sebelumnya.
