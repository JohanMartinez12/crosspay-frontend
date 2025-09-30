import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private baseUrl = 'https://localhost:7159/api/transactions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  create(dto: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, dto);
  }
}
