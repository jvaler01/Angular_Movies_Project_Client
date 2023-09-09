import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly baseUrl: string = environment.baseUrl;
  private readonly apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmVlNWMyODk1MzYxYzc4MWExYWJkMTczYTczOGI2NSIsInN1YiI6IjY0ZmM1YTc1ZmZjOWRlMGVkZWQyNjBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5zFS0e0Rcmrd7a7ScbLq8QZig_iIHZD79o04p1zL8ig';
  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/now_playing?language=es-ES&page=1`, {headers})
  }

  getPopular(): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/popular?language=es-ES&page=1`, {headers})
  }

  getCredits(id: string): Observable<any>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    }
    return this.http.get(`${this.baseUrl}/${id}/credits?language=es-ES`, {headers})
  }
}
