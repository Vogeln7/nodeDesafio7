const express= require('express');
const fs = require('fs');
const app=express();
const encoding="UTF-8";

let visitasAItems=0;
let visitasAItemRandom=0;

app.get('/items', async (req, res)=>{
    try{
        const archivo = await fs.promises.readFile('productos.txt',encoding);
        const productos = JSON.parse(archivo);
        visitasAItems++;
        const items = { items: productos, cantidad: productos.length };
        res.send(items);
    } catch(err){
        console.log(err);
    }
})

app.get('/item-random', async (req, res)=>{
    try{
        const archivo = await fs.promises.readFile('productos.txt',encoding);
        const productos = JSON.parse(archivo);
        visitasAItemRandom++;
        const numeroRandom = Math.floor(Math.random() * (productos.length));
        const itemRandom = { item: productos[numeroRandom] };
        res.send(itemRandom);
    } catch(err){
        console.log(err);
    }
})
app.get('/visitas', (req, res)=>{
    const visitas = {visitas: {items: visitasAItems, itemRandom: visitasAItemRandom}}
    res.send(visitas);
})


app.listen(8080,()=>console.log('Se inicia servicio en el puerto 8080'));