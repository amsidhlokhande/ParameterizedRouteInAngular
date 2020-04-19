import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { map, filter } from "rxjs/operators";

@Injectable()
export class BookService {
  BOOKS: Book[] = [
    { id: 1, name: 'Java Programming Language 5.1', author: 'Amsidh Lokhande1', price: 950 },
    { id: 2, name: 'Java Programming Language 5.2', author: 'Amsidh Lokhande2', price: 951 },
    { id: 3, name: 'Java Programming Language 5', author: 'Amsidh Lokhande3', price: 953 },
    { id: 4, name: 'Java Programming Language 5.3', author: 'Amsidh Lokhande4', price: 956 },
    { id: 5, name: 'Java Programming Language 5.4', author: 'Amsidh Lokhande5', price: 957 },
    { id: 6, name: 'Java Programming Language 5.5', author: 'Amsidh Lokhande6', price: 958 },
    { id: 7, name: 'Java Programming Language 5.6', author: 'Amsidh Lokhande7', price: 9511 },
    { id: 8, name: 'Java Programming Language 7.1', author: 'Amsidh Lokhande8', price: 954 },
    { id: 9, name: 'Java Programming Language 7.2', author: 'Amsidh Lokhande9', price: 954 },
    { id: 10, name: 'Java Programming Language 8.1', author: 'Amsidh Lokhande10', price: 997 },
    { id: 11, name: 'Java Programming Language 8.2', author: 'Amsidh Lokhande11', price: 932 },
    { id: 12, name: 'Java Programming Language 8.3', author: 'Amsidh Lokhande12', price: 986 },
    { id: 13, name: 'Java Programming Language 8.4', author: 'Amsidh Lokhande13', price: 908 }
  ];
  constructor () { }

  getAllBooks(): Observable<Book[]> {
    return of( this.BOOKS );
  }
  getBookDetails( id: number ): Observable<Book> {
    return this.getAllBooks()
      .pipe( map( books => books.find( book => book.id == id ) ) );
  }
}

export interface Book {
  id: number,
  name: string,
  author: string,
  price: number
}
