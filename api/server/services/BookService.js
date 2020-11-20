import database from '../src/models';

class BookService {

  static async addBook(newBook) {
    try {
      return await database.Form.create(newBook); 
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;