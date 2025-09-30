import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './payment-form.html',
  styleUrls: ['./payment-form.css'] 
})
export class PaymentForm {
  transaction = {
    currency: '',
    amount: 0,
    description: '',
    fullName: '',
    documentType: '',
    cardLast4: '',
    expiryMonth: '',
    expiryYear: ''
  };

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post('https://localhost:44307/api/transactions', this.transaction)
      .subscribe({
        next: res => {
          console.log('Transacción creada:', res);
          alert('Transacción enviada con éxito');
        },
        error: err => console.error('Error creando transacción:', err)
      });
  }
}
