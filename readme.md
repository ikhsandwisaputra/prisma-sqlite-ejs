- BELAJAR PRISMA

<!-- PRISMA SET UP -->
- mkdir nama folder
- cd folder
- npm init -y
- npm install typescript @types/node --save-dev
- npx tsc --init
- npm install prisma --save-dev
- npx prisma init --database-provider sqlite --output generated/prisma


<!-- BIKIN MODEL -->
bikin model ada di dalam folder prisma schema.prisma <----
model nama model {
    ?
}

setelah bikin model 
- npx prisma migrate dev --name init

<!-- CRUD DATA -->
- npm intall @prisma/client

touch script.ts

setelah itu bisa create data


<!-- STRUKTUR FOLDER  -->

<!-- SETELAH MEMBUAT TABEL DAN SUDAH MUNCUL DI PRISMA STUDIO -->

- selanjutnya generate
- npx prisma init
- npx prisma generate
- hasilnya akan ada folder generated/prisma


<!-- MELAKUKAN SEED DATA KE TABEL -->
- bikin folder SEED lalu buat file seed.ts
- disana bisa bikin prisma.tabel.create
- setelah semuanya selesai maka bisa install
- setting package.json
- tambahkan script > tsx prisma/seed/seed.ts
- jalankan npm run seed


<!-- MENAMPILKAN DATA DAN FORM DI UI HTML -->

- npm install express prisma @prisma/client body-parser ejs 
- bikin file index.ts untuk server
- bikin file routes untuk router 
- bikin file .ejs untuk ui
- npx ts-node-dev src/index.ts
