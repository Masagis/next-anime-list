<!-- PROJECT Name -->
<h1 align="center" style="border-bottom: none;">Jikan Anime Next</h1>

## Tentang

Ini adalah repositori Frontend Daftar Anime Menggunakan API Public dari Jikan. Dikembangkan oleh [https://github.com/Masagis](Agis Tri Wahyuji).

## Dikembangkan Dengan

- **Next.js**, sebagai framework utama.
- **Bootstrap 5**, sebagai framework CSS.
- **Yarn**, sebagai package manager.
- **Jest**, sebagai unit testing.

## Menjalankan Project di Lokal

1. Clone repositori:

```bash
# using ssh
git clone git@github.com:Masagis/next-anime-list.git
# using https
git clone https://github.com/Masagis/next-anime-list.git
```

2. Pindah projek direktori:

```bash
cd project-name/
```

3. Install package:

```bash
# using npm
npm install
# using yarn
yarn or yarn install
```

4. Setting Env Local:

```bash
# rename .env.example menjadi .env
mv .env.example .env

# isikan dengan code dibawah ini
NEXT_URL_API=https://api.jikan.moe
```

5. Jalankan development server:

```bash
npm run dev
# or
yarn dev
```

6. Buka di [http://localhost:3000](http://localhost:3000), dan ya Anda sekarang berhasil menjalankannya

## Struktur Project

```bash
├── pages                  # Folder routing file.
├── src                    # Foldel utama aplikasi.
│   ├── components         # Folder untuk menyimpan components yang dapat digunakan kembali.
│   ├── config             # Folder untuk menyinpan konfigurasi dari .env lokal.
│   ├── container          # Folder untuk menyimpan file hasil layouting.
│   ├── store              # Folder untuk menyimpan utilities file API.
        ├── actions        # Folder untuk menyimpan semua action API.
        ├── actionType     # Folder untuk menyimpan semua tipe dari action yang digunakan.
        ├── reducers       # Folder untuk menyimpan semua kontrol yang dapat di gunakan oleh action tertentu.
```

## Live Aplikasi

[https://jikan-anime-next.vercel.app](Jikan Anime Next)
