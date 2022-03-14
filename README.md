# kenjo-challenge-backend

Crear el archivo .env con la conexión a la db de mongoDB.
He creado una constande urlDB para conectara al link del .env desde index.js
He eliminado la url del git del package.json
En el ngOnInit del album-list.component.ts abrí llaves para meter un console.log
En el album.microservices he quitado el findresult[0] para que en vez de que me saque el primero me saque todos y he quitado el findquery. 

En album.microservice.js he rellenado el updateById cogiendo como ejemplo el deleteById y he hecho las variabless de title, year, artist, photoUrl y score para declararlas usando req.body. En la funcion AlbumModel.updateOne(updateQuery) he añadido el {$set para que coja los parametros de las variables declaradas}. En el res devuelvo con el .send todas las variables cambiadas