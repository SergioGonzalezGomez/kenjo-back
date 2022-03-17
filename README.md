# kenjo-challenge-backend


 Technical Errors Resolved:

I created the file .env with conection to the db in MongoDb

I created the urlDb constfor connect the link from .env to the index.js file.  

I deleted the url from the git file from the package.json



Functional Errors Resolved:

Error: In album.microservice.js file the function find returns the first record instead of all of them. 
Solution: I replace the findResult[0] with findResult as the send parameter in order to get all the records.

In album.microservice.js I filled the updateById taking as example the deleteById function and added the title, year, artist, photoUrl and score variables in order to declare them using req.body.   
In the function AlbumModel.updateOne(updateQuery) I added {$set} in order to take the declared variables parameters and in the res I return the changed variables with .send.

I created the update-album-dialog component.

In the album-list.component.html file I implemented the click event in the openDialogUpdateAlbum(album, i) function in order to open the html file from the new component updatealbumdialog.

In the album-list.component.ts I imported the MatDialog and added the openDialogUpdateAlbum function and insert the index and album parameters calling the updateAlbumDialogComponent in order to get the data from the album.

In the update-album-dialog.component.html I copied the new-album.dialog.html changing the function of the confirm button to updateAlbum(album)

I copied the new-album.dialog.scss to the updated-album-dialog.scss to get the same styles

In the update-album-dialog.component.ts I provide the album information to be updated with this.data on each album property. I inyected the mat_dialog_data in order to get the data that I want to update. I copied the updateAlbum function taking the createNewAlbum as example and changed the post to put and added the id to the url with this.data._id

I created the Services component: I imported Injectable, Observable, Subject and tap. I created the private variable _refresh$ in order to refresh the page every time there is an update or an album is created. I created the createNewAlbum, getAlbum and UpdateAlbum functions in order to provide them with the service to new-album.dialog.ts and update-album-dialog.ts.

I tried to refresh the album list after using update-album-dialog but I couldn't achieve it. You have to refresh the page manually.

I created the Score component in order to insert the 1-5 score into the album list but couldn't achieve to show it, nor that the openDialogScorealbum remembered the socre you have selected. However it changes the database (altough in the second click instead of the first).