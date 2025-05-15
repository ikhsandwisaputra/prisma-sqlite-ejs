import express from 'express';
import { PrismaClient } from '../../prisma/generated/prisma';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res)=>{
    const barang = await prisma.barang.findMany();
    res.render('barang', {barang});
})

// router.post('/', async (req, res)=>{
//     const { nama, jns_kelamin, alamat, kode_pos, kota, tgl_lahir} = req.body;
//     await prisma.barang.create({
//         data: {
           
//         },
//     });
//     res.redirect('/barang');
// })

export default router;