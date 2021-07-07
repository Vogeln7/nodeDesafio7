const express= require('express');
const fs = require('fs');
const app=express();

app.get('/items',(req,res)=>{
    res.send('hola este es tu servidor express')
})

app.get('/item-random',(req,res)=>{
    res.send('hola este es tu servidor express')
})

app.get('/visitas',(req,res)=>{
    res.send('hola este es tu servidor express')
})

app.listen(8080,()=>console.log('Se inicia serviio en el puerto 8080'));