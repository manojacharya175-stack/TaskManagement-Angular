import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private apiUrl = "https://localhost:7142/api/auth";
  private readonly tokenKey = 'auth_token';
  
  private http = inject(HttpClient);

  login(email: string, password: string){
    return this.http.post<any>(`${this.apiUrl}/login`,{
      email,
      password
    }).pipe(
      tap(Response => {
        localStorage.setItem('auth_token', Response.token);
      })
    );
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.tokenKey);
  }
}
