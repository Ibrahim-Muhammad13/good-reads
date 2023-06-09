import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(page:number,limit:number){
    return this.http.get('http://localhost:3000/books',
   { params: new HttpParams().set('page', page).set('limit', limit)}
    );
  }

  searchBooks(searchTerm: string){
    return this.http.get('http://localhost:3000/books/search/'+searchTerm);
  }
  
  getBooksBycategoryId(catId:number){
    return this.http.get('http://localhost:3000/books/cat/'+catId);
  }
  getBooksByauthorId(authorId:string){
    return this.http.get('http://localhost:3000/books/author/'+authorId);
  }
  getBookById(id:any): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books/'+id);
  }


  getBookByID(id:any): Observable<Book[]>{//for update book
    return this.http.get<Book[]>('http://localhost:3000/books/admin/'+id);
  }


  // addBook(bookName: string,  rate: number,authorId: number, categoryId: number){
  //   const newBook = { name: bookName, rate: rate, authorId: authorId, categoryId: categoryId };
  //   // console.log(newBook);
  //   return this.http.post('http://localhost:3000/books', newBook).subscribe((res: any)=>console.log(res));
  // }

  addBook(data:any){
    return this.http.post('http://localhost:3000/books', data).subscribe((res: any)=>console.log(res));
  }

  updateBook(bookId: any, Name: string, rate: number, authorId: number, categoryId: number) {
    const book = { name: Name, rate: rate, authorId: authorId, categoryId: categoryId };
    // console.log("this book",book);
    return this.http.put('http://localhost:3000/books/'+bookId, book);
  }

  UpdateBook(book: any, bookId:any) {
    // console.log("this book",book);
    return this.http.put('http://localhost:3000/books/'+bookId, book);
  }


  deleteBook(bookId: number): Observable<Book[]> {
    return this.http.delete<Book[]>('http://localhost:3000/books/' + bookId);
  }

}
