import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard implements OnInit {
  transactions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions() {
    this.http.get<any[]>('https://localhost:44307/api/transactions')
      .subscribe({
        next: data => {
          this.transactions = data;
          console.log('Transacciones cargadas:', data);
        },
        error: err => console.error('Error cargando transacciones:', err)
      });
  }
}
