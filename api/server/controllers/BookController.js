
// import { logger } from '../../logger';
import BookService from '../services/BookService';
import Util from '../utils/Utils';
const {logger} = require('../../logger');
const util = new Util();

class BookController { 

  static async addBook(req, res) {
    if (!req.body.name || !req.body.email || !req.body.phone) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    var pattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;   // This is Email Regex from email validation  
    if(pattern.test(req.body.email)){
      logger.info(`Running localhost:2020 `);
    }else{
      logger.error(`Running localhost:2020 ${req.body.name} ${req.body.email} ${req.body.phone}`);
      util.setError(400, 'Email is not correct');
      return util.send(res);
    }

    const newBook = req.body;
    try {
      const createdBook = await BookService.addBook(newBook);
      util.setSuccess(201, 'Registered successful..!', createdBook);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default BookController;