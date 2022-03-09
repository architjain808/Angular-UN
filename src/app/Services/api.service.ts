import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  /**
   * Get All post from the database
   */
  getAllPosts() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts', {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
  /**
   * POST request for form Submit
   */
  submit(dataForm: any) {
    this._http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(dataForm.value)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  /*
   *Delete request for a perticular post
   */
  delete(id: number) {
    return this._http.delete(
      'https://jsonplaceholder.typicode.com/todos/' + id
    );
  }
  /**
   * Get a singlr post from View button
   */
  getPost(id: number) {
    return this._http.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }
  /**
   * Using RxJS filters to duble the input value
   */
  double(id: number) {
    return of(id).pipe(map((x) => x * 2));
  }
}
