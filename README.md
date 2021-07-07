# nodeDesafio7
Desafio 7 (servidor con express)
# enunciado
 Formato: link a un repositorio en Github con el proyecto cargado
    Sugerencia: no incluir los node_modules
 

Consigna: Realizar un proyecto de servidor basado en node.js que utilice el middleware express e implemente tres endpoints en el puerto 8080:
Ruta get '/items' que responda un objeto con todos los productos y su cantidad total en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }
Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de productos que se encuentran en el archivo 'productos.txt'. El formato de respuesta será: { item: {producto} }
La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta del punto 1 y cuantas la ruta del punto 2. Contestar con el formato:  { visitas : { items: cantidad, item: cantidad } }

Usar 'productos.txt' del desafío anterior. Ej:

[
	{
		"title": "Helado",
		"price": 500,
		"thumbnail": "url1",
		"id": 1
	},
	{
		"title": "Planta",
		"price": 350,
		"thumbnail": "url2",
		"id": 2
	},
	{
		"title": "Pizza",
		"price": 250,
		"thumbnail": "url3",
		"id": 3
	},
	{
		"title": "Yerba",
		"price": 485,
		"thumbnail": "url4",
		"id": 4
	}
]
