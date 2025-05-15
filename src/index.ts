import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import pembeliRoutes from './routes/pembeli';
import barangRoutes from './routes/barang';
import homeRoutes from './routes/home';

const app = express();

app.use(bodyParser.urlencoded({
    extended : true
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// ROUTES HALAMAN
app.use('/', homeRoutes);
app.use('/pembeli', pembeliRoutes);
app.use('/barang', barangRoutes);

app.listen(3000, ()=>{
    console.log("server bejralan di http://localhost:3000/");
})
