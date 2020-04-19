import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookService } from '../book.service';

@Component( {
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [ './book.component.css' ]
} )
export class BookComponent implements OnInit {

  books: Observable<Book[]>;

  constructor ( private bookService: BookService ) { }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

}
