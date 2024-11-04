

import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true, 
  imports: [FormsModule, NgIf], 
})
export class AuthorsComponent {
  authorId!: number;
  author: Author | null = null;
  errorMessage: string | null = null;

  constructor(private booksService: BooksService) {}

  onSubmit(): void {
    if (this.authorId <= 0) {
      this.errorMessage = 'Please enter a valid author ID.';
      this.author = null;
      return;
    }

    this.booksService.getAuthorById(this.authorId).subscribe(
      (data: Author) => {
        this.author = data;
        this.errorMessage = null;
      },
      (_error) => {
        this.author = null;
        this.errorMessage = 'Author not found.';
      }
    );
  }
}
