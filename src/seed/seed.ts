import { PrismaClient } from "../../prisma/generated/prisma";

const prisma = new PrismaClient();

async function main(){
    const suplier1 = await prisma.suplier.create({
        data: {
            nama: "PT Sumber Makmur",
            alamat: "Jl. Mawar No. 123",
            kode_pos: "12345",
            kota: "Jakarta"
        }
    })

    const barang1= await prisma.barang.create({
        data: {
            nama: "Sabun Mandi",
            varian: "Aroma Lavender",
            harga_beli: 5000,
            harga_jual: 7500

        }
    })
    const pembeli1 = await prisma.pembeli.create({
        data: {
            nama: "Budi Santoso",
            jns_kelamin: "Laki-laki",
            alamat: "Jl. Melati No. 45",
            kode_pos: "54321",
            kota: "Bandung",
            tgl_lahir: new Date('1995-08-17')
        }
    })
    await prisma.pesanan.create({
        data: {
            id_barang: barang1.id_barang,
            id_pelanggan: pembeli1.id_pembeli,
            qty: 5,
            tgl_pesan: new Date("2025-05-10")
        }
    })
}

main().then(()=> console.log('Seeding Selesai')).catch(e => {
    console.error(e)
    process.exit(1)
}).finally(() => prisma.$disconnect())