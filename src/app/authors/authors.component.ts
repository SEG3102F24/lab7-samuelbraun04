import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authorId: number;
  author: Author | null = null;
  errorMessage: string | null = null;

  constructor(private booksService: BooksService) {}

  onSubmit(): void {
    this.booksService.getAuthorById(this.authorId).subscribe(
      (data: Author) => {
        this.author = data;
        this.errorMessage = null;
      },
      (error) => {
        this.author = null;
        this.errorMessage = 'Author not found.';
      }
    );
  }
}
