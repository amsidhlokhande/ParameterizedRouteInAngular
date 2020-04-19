import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ViewBookDetailComponent } from './book/view-book-detail/view-book-detail.component';
import { BookService } from './book.service';

@NgModule( {
  declarations: [
    AppComponent,
    BookComponent,
    ViewBookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
