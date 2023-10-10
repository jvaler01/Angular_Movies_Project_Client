import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User, LoginUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = environment.apiUrl;
  private _currentUser = signal<LoginUser|null>(null);

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );

  private http = inject( HttpClient );

  private setAuthentication(user: LoginUser, token:string): boolean {
    this._currentUser.set( user );
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('email', user.email);
    console.log(this.currentUser())
    return true;
  }
  login(user: LoginUser): Observable<boolean>{
    const headers = { 
      'content-type': 'application/json'
    }
    return this.http.post<{ user: LoginUser, token: string }>(`${this.apiUrl}/api/auth/login`, user , {headers})
    .pipe(
      map(({ user, token }) => this.setAuthentication( user, token ))
    )
  }
  signup(user: User): Observable<any>{
    const headers = { 
      'content-type': 'application/json'
    }
    return this.http.post(`${this.apiUrl}/api/auth/register`, user , {headers})
  }
  getUser(): Observable<boolean>{
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    }
    return this.http.post<{ user: LoginUser }>(`${this.apiUrl}/api/auth/user`, {email: sessionStorage.getItem('email')} , {headers})
    .pipe(
      map(({ user }) => this.setAuthentication( user, sessionStorage.getItem('token')! ))
    )
  }
  checkAuthStatus():Observable<boolean> {
    const token = sessionStorage.getItem('token');
    if ( !token ) {
      this.logout();
      return of(false);
    }
    const headers = { 
      'content-type': 'application/json',
      'Authorization': `${token}`
    }
    return this.http.get<any>(`${this.apiUrl}/api/auth/check-token`, { headers })
    .pipe(
      map( ({ user, token }) => this.setAuthentication( user, token )),
      catchError(() => {
        return of(false);
      })
    );
  }
  logout() {
    sessionStorage.removeItem('token');
    this._currentUser.set(null);
  }
}
