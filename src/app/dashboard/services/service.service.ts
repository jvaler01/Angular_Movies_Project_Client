import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly baseUrl: string = environment.baseUrl;
  private readonly apiUrl: string = environment.apiUrl;
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODMzZGY0YWYzNGQzMjBkYmQ2ZDJiMjA4ODg0NzEzNSIsInN1YiI6IjY0ZmM1YTc1ZmZjOWRlMGVkZWQyNjBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6aLklHtzRoHMlO4NxHaA09rhswyJv9bCQZetZIxywNM';
  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/now_playing?language=es-ES&page=1`, {headers})
  }
  getNowPlayingBack(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.apiUrl}/api/movies/now_playing`, {headers})
  }

  getPopular(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/popular?language=es-ES&page=1`, {headers})
  }
  getPopularBack(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.apiUrl}/api/movies/popular`, {headers})
  }

  getCredits(id: string): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/${id}/credits?language=es-ES`, {headers})
  }
  getCreditsBack(id: string): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.apiUrl}/api/movies/credits`, {
      headers,
      params: {
        id
      }
    })
  }
}
