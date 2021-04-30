import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';
  apiUrl = "https://tr360-frontend-exam-april.azurewebsites.net/vargajr/movies";

  constructor(private http:HttpClient) { }

  getMovieList():any {
    return this.http.get(this.apiUrl);
  }

  deleteMovie(id):any {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
