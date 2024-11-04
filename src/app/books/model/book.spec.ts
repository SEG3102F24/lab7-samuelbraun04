import { Book, Author } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    const authors: Author[] = []; 
    const book = new Book(
      1,                
      'test category',  
      'test title',     
      1,                
      authors,          
      2023,             
      'Test description'
    );
    expect(book).toBeTruthy();
  });
});
