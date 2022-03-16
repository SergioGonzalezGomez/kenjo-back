const mongo = require('mongodb');
const AlbumModel = require('./album.model');
const check = require('check-types');
const httpStatusCodes = require('http-status-codes').StatusCodes;

/**
 * @class AlbumDbMicroservice
 * @classdesc Album Database Microservice
 */
class AlbumDbMicroservice {
/***************************************************************
 ********************* STANDARD METHODS ************************
 ***************************************************************/

    /**
     * @summary Create new document
     * @description Create and insert a new document in a collection.
     * @param {express.Request} req is the request of the operation
     * @param {express.Response} res is the response of the operation
     * @param {express.Next} next is the middleware to continue with code execution
     * @returns {Array} with created document
     */
  create = async (req, res, next) => {
    if (check.not.assigned(req.body) || check.not.object(req.body) || check.emptyObject(req.body)) {
        const error = new Error('A non-empty JSON body is mandatory.');
        next(error);
        return;
    }

    try {
      const album = new AlbumModel(req.body);
      const createdDocument = await album.save();

      res.status(httpStatusCodes.OK).send(createdDocument);
    } catch (error) {
      next(error);
      return;
    }
  }

    /**
     * @summary Find documents from a collection
     * @description Get documents
     * @param {express.Request} req is the request of the operation
     * @param {express.Response} res is the response of the operation
     * @param {express.Next} next is the middleware to continue with code execution
     * @returns {Array} with all documents matching the conditions
     */
  find = async (req, res, next) => {
    try {
      const findQuery = { _id: { $ne: null }};

      const findResult = await AlbumModel.find(findQuery).lean().exec();
      /* const findResult = await AlbumModel.find().lean().exec(); */

      res.status(httpStatusCodes.OK).send(findResult);
    } catch (error) {
      next(error);
      return;
    }
  }

    /**
     * @summary Update a document
     * @description Update a document by id
     * @param {express.Request} req is the request of the operation
     * @param {express.Response} res is the response of the operation
     * @param {express.Next} next is the middleware to continue with code execution
     * @returns {Object} Empty object if the operation went well
     */
  updateById = async (req, res, next) => { 
    let documentId = req.params.id;
    let updateQuery = { _id: documentId };

    let title= req.body.title;
    let year= req.body.year;
    let artist= req.body.artist;
    let photoUrl= req.body.photoUrl;
    let score= req.body.score;

    AlbumModel.updateOne(updateQuery, {$set:{title: title, year: year, artist: artist, photoUrl: photoUrl, score: score}}).then(updateResult => {
      if(check.not.assigned(updateResult)){
        let error = new Error('Document to update was not found.');
        next(error);
        return;
      }

      res.status(httpStatusCodes.OK).send(title, year, artist, photoUrl, score);
    }).catch(error => {
      next(error);
    });
  } 

    /**
     * @summary Delete a document
     * @description Delete a document by id
     * @param {express.Request} req is the request of the operation
     * @param {express.Response} res is the response of the operation
     * @param {express.Next} next is the middleware to continue with code execution
     * @returns {Object} Empty object if the operation went well
     */
  deleteById = async (req, res, next) => {

    let documentId = req.params.id;
    let deleteQuery = { _id: documentId };

    AlbumModel.deleteOne(deleteQuery).then(deleteResult => {
      if(check.not.assigned(deleteResult)){
        let error = new Error('Document to delete was not found.');
        next(error);
        return;
      }

      res.status(httpStatusCodes.OK).send({});
    }).catch(error => {
      next(error);
    });
  }
}

module.exports = AlbumDbMicroservice;
