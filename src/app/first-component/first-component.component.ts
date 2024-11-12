import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  encryptPassword(password: string): string {
    return CryptoJS.SHA256(password).toString();
  }

  login() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const encryptedPassword = this.encryptPassword(this.password);

    this.http.post('http://localhost:8080/MyFirstProject/login', 
        { email: this.email, password: encryptedPassword }, 
        { headers })
      .subscribe(response => {
        console.log(response);
        alert('Login successful');
        this.router.navigate(['acceuil/Forum/USER']);
      }, error => {
        console.error(error);
        if (error.status === 401) {
          alert('Invalid email or password');
        } else {
          alert('Server error');
        }
      });
  }

  goToSecond() {
    this.router.navigate(['acceuil/forum']);
  }
}
