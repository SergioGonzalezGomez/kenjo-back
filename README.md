# kenjo-challenge-backend

Crear el archivo .env con la conexión a la db de mongoDB.
He creado una constande urlDB para conectara al link del .env desde index.js
He eliminado la url del git del package.json
En el ngOnInit del album-list.component.ts abrí llaves para meter un console.log
En el album.microservices he quitado el findresult[0] para que en vez de que me saque el primero me saque todos y he quitado el findquery. 

En album.microservice.js he rellenado el updateById cogiendo como ejemplo el deleteById y he hecho las variabless de title, year, artist, photoUrl y score para declararlas usando req.body. En la funcion AlbumModel.updateOne(updateQuery) he añadido el {$set para que coja los parametros de las variables declaradas}. En el res devuelvo con el .send todas las variables cambiadas

He creado el componente update-album-dialog. 

En el album-list.component.html he implementado el evento click con la funcion openDialogUpdateAlbum(album, i), para que abra el html del nuevo componente updatealbumdialog.

En album-list.component.ts añado la funcion openDialogUpdateAlbum y le paso como parametros el index y el album  llamando al componente UpdateAlbumDialogComponent para que pille la data de ese album e importo el MatDialog

En el update-album-dialog.component.html he copiado el new-album.dialog.html cambiando la funcion del boton evento confirm a updateAlbum(album).

Copio el update-album-dialog.scss del new-album-dialog.scss para que tenga los mismo estilos.

En el update-album-dialog.component.ts paso la infromación del album que se quiere actualizar con this.data en cada propiedad de album. Inyecto el mat_dialog_data para recuperar la data que quiero actualizar. La funcion updateAlbum la copio como createNewAlbum y cambio el post a put y añado el id a la url.