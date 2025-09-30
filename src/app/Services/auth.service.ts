// src/app/Services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7159/api/auth/login'; // Ajusta al endpoint real de tu backend

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(res => {
        if (res && res.token) {
          localStorage.setItem('authToken', res.token);
          this.router.navigate(['/admin/dashboard']);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/admin/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
