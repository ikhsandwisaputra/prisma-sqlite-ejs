import express from 'express';
import { PrismaClient } from '../../prisma/generated/prisma';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res)=>{
    const pembeli = await prisma.pembeli.findMany();
    res.render('pembeli', {pembeli});
})

router.post('/', async (req, res)=>{
    const { nama, jns_kelamin, alamat, kode_pos, kota, tgl_lahir} = req.body;
    await prisma.pembeli.create({
        data: {
            nama, 
            jns_kelamin,  
            alamat,
            kode_pos,
            kota,
            tgl_lahir: new Date(tgl_lahir),
        },
    });
    res.redirect('/pembeli');
})

export default router;