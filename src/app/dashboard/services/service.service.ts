import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getNowPlayingBack(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.apiUrl}/api/movies/now_playing`, {headers})
  }

  getPopularBack(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.apiUrl}/api/movies/popular`, {headers})
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
