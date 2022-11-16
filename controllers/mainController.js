let productos = [
    {
        id:1,
        nombre: 'Carpaccio fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        precio: 'U$S 65.50',
        img:'/images/Carpaccio-de-salmon.jpg',
        url:'/detalle/0'
    },
    {
        id:2,
        nombre: 'Risotto de berenjena',
        descripcion: '',
        precio: 'U$S 47.00',
        img:'/images/Risotto-berenjena-queso-cabra.jpg',
        url:'/detalle/1'
    },
    {
        id:3,
        nombre: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        precio: 'U$S 27.50',
        img:'/images/Mousse-de-arroz-con-leche.jpg',
        url:'/detalle/2'
    },
    {
        id:4,
        nombre: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 'U$S 37.50',
        img:'/images/esparragos.png',
        url:'/detalle/3'
    }
]



const mainController = {
    index: (req, res) => {
       // res.json(productos);    => para probar que estén llegando a la vista los prods
         res.render('index', {productos});   //esta bien dejarlo una sola vez//

},
    productDetail: (req,res) => {
        let producto= productos[req.params.id-1];       //Otra forma de solucionarlo: let plato = listaPlatos.find(plato => plato.id == req.params.id);
       console.log(producto);
        res.render('detalleMenu', {producto});
    }
}

module.exports= mainController;