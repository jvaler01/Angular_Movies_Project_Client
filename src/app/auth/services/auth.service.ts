import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User, LoginUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  login(user: LoginUser): Observable<any>{
    const headers = { 
      'content-type': 'application/json'
    }
    return this.http.post(`${this.apiUrl}/api/auth/login`, user , {headers})
  }
  signup(user: User): Observable<any>{
    const headers = { 
      'content-type': 'application/json'
    }
    return this.http.post(`${this.apiUrl}/api/auth/register`, user , {headers})
  }
}
