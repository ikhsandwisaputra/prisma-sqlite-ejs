-- CreateTable
CREATE TABLE "Barang" (
    "id_barang" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "varian" TEXT,
    "harga_beli" REAL NOT NULL,
    "harga_jual" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "id_pesanan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_pelanggan" INTEGER NOT NULL,
    "id_barang" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "tgl_pesan" DATETIME NOT NULL,
    CONSTRAINT "Pesanan_id_pelanggan_fkey" FOREIGN KEY ("id_pelanggan") REFERENCES "Pembeli" ("id_pembeli") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pesanan_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "Barang" ("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pembelian" (
    "id_pembelian" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_barang" INTEGER NOT NULL,
    "id_suplier" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "tgl" DATETIME NOT NULL,
    CONSTRAINT "Pembelian_id_barang_fkey" FOREIGN KEY ("id_barang") REFERENCES "Barang" ("id_barang") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pembelian_id_suplier_fkey" FOREIGN KEY ("id_suplier") REFERENCES "Suplier" ("id_suplier") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pembeli" (
    "id_pembeli" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "jns_kelamin" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "kode_pos" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "tgl_lahir" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Suplier" (
    "id_suplier" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "kode_pos" TEXT NOT NULL,
    "kota" TEXT NOT NULL
);
