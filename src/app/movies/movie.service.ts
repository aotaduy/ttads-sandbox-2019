import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  search(searchString) {
    return this.http.get('http://localhost:9000/api/movies/search/' + searchString);
  }
}
