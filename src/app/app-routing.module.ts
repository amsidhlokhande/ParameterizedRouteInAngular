import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ViewBookDetailComponent } from './book/view-book-detail/view-book-detail.component';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'bookdetails/:id', component: ViewBookDetailComponent },
  { path: '', redirectTo: '/book', pathMatch: 'full' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
