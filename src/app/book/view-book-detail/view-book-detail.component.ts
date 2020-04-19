import { Component, OnInit } from '@angular/core';
import { Book, BookService } from 'src/app/book.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component( {
  selector: 'app-view-book-detail',
  templateUrl: './view-book-detail.component.html',
  styleUrls: [ './view-book-detail.component.css' ]
} )
export class ViewBookDetailComponent implements OnInit {

  book: Observable<Book>;
  constructor ( private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private location: Location ) { }

  ngOnInit(): void {
    //Using Snapshot
    //let id = this.activatedRoute.snapshot.params.id; 
    //let id = parseInt( this.activatedRoute.snapshot.paramMap.get( 'id' ) );
    //alert( id );

    //Using Observable 
    //this.book = this.bookService.getBookDetails( id );
    /*   this.activatedRoute.paramMap.subscribe( params => {
        let id = parseInt( params.get( 'id' ) );
        this.book = this.bookService.getBookDetails( id );
      } ); */

    this.activatedRoute.params.subscribe( params => {
      let id = params.id;
      alert( id );
      this.book = this.bookService.getBookDetails( id );
    } );


  }

  goBack(): void {
    this.location.back();
  }
}
