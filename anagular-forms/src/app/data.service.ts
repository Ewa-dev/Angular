import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  postUrl = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get(this.postUrl);
  }
}
