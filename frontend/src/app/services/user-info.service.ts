import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http:HttpClient) { }
  addBook(bookdetails:any){
    return this.http.post('http://localhost:3000/add', bookdetails).subscribe((res: any)=>console.log(res));
  }

  getallbooks(user_id:string){
    return this.http.get('http://localhost:3000/profile/'+user_id, );
  }


  getbooks(user_id:string,status:string){
    return this.http.get('http://localhost:3000/profile/'+user_id+"?books="+status);
  }
  
  update(book_id:string,NewStatus:any){
    // console.log(NewStatus);
    return this.http.put('http://localhost:3000/profile/'+book_id,NewStatus);
  }

}







// import { HttpClient } from '@angular/common/http';
// import { Book } from '../models/book';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {


//   getBooks(): Observable<Book[]>{
//     return this.http.get<Book[]>('http://localhost:3000/books');
//   }
  
//   getBooksBycategoryId(catId:number){
//     return this.http.get('http://localhost:3000/books/cat/'+catId);
//   }
//   getBookById(id:any): Observable<Book[]>{
//     return this.http.get<Book[]>('http://localhost:3000/books/'+id);
//   }

//   addBook(bookName: string,  rate: number,authorId: number, categoryId: number){
//     const newBook = { name: bookName, rate: rate, authorId: authorId, categoryId: categoryId };
//     // console.log(newBook);
//     return this.http.post('http://localhost:3000/books', newBook).subscribe((res: any)=>console.log(res));
//   }

//   updateBook(bookId: number, Name: string, rate: number, authorId: number, categoryId: number) {
//     const book = { name: Name, rate: rate, authorId: authorId, categoryId: categoryId };
//     console.log("this book",book);
//     return this.http.put('http://localhost:3000/books/'+bookId, book);
//   }

//   deleteBook(bookId: number): Observable<Book[]> {
//     return this.http.delete<Book[]>('http://localhost:3000/books/' + bookId);
  // }

// }