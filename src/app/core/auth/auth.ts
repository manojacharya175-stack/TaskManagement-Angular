import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private apiUrl = "https://localhost:7142/api/auth";

  constructor(private http:HttpClient) {}

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,{
      email,
      password
    }).pipe(
      tap(Response => {
        console.log('Storing token:', Response.token);
        localStorage.setItem('auth_token', Response.token);
      })
    );
  }
}
