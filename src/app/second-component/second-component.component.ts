import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  password: string = "";
  confirmpassword: string = "";
  userName: string = "";
  Email: string = "";
  Phone: string = "";
  isSubmitted: boolean = false;
  isNull: boolean = false;
  isUserNameNull: boolean = false;
  isEmail: boolean = false;
  isNullC: boolean = false;
  isPhone: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  encryptPassword(password: string): string {
    return CryptoJS.SHA256(password).toString();
  }

  async onSubmitForm() {
    this.isUserNameNull = false;
    this.isNull = false;
    this.isSubmitted = false;
    this.isEmail = false;
    this.isNullC = false;
    this.isPhone = false;

    if (!this.userName) {
      this.isUserNameNull = true;
    }
    if (!this.password) {
      this.isNull = true;
    }
    if (!this.confirmpassword) {
      this.isNullC = true;
    }
    if (this.password && this.confirmpassword && this.password !== this.confirmpassword) {
      this.isSubmitted = true;
    }
    if (!this.Email) {
      this.isEmail = true;
    }
    if (this.Email && !this.estValide(this.Email)) {
      this.isEmail = true;
    }
    if (!this.Phone) {
      this.isPhone = true;
    }
    if (this.Phone && !this.estvalidephone(this.Phone)) {
      this.isPhone = true;
    }

    if (!this.isUserNameNull && !this.isNull && !this.isNullC && !this.isSubmitted && !this.isEmail && !this.isPhone) {
      try {
        // Chiffrement du mot de passe
        const encryptedPassword = this.encryptPassword(this.password);

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
          email: this.Email,
          password: encryptedPassword, // Envoyer le mot de passe haché
          username: this.userName,
          phone: this.Phone,
        };

        this.http.post('http://localhost:8080/MyFirstProject/Login/SignUP', body, { headers })
          .subscribe(response => {
            console.log(response);
            alert('Sign up successful');
            this.router.navigate(['/acceuil']);
          }, error => {
            if (error.status === 409) {
              alert('Email already exists. Please use a different email.');
            } else {
              alert('Server error');
            }
          });
      } catch (err) {
        console.error('Erreur lors de la soumission du formulaire :', err);
        alert('Erreur lors de la soumission du formulaire.');
      }
    }
  }

  estValide(email: string): boolean {
    return email.endsWith('@gmail.com');
  }

  nombreDeChiffres(chaineNombre: string): number {
    let count = 0;
    for (let i = 0; i < chaineNombre.length; i++) {
      if (chaineNombre[i] >= '0' && chaineNombre[i] <= '9') {
        count++;
      }
    }
    return count;
  }

  estvalidephone(phone: string): boolean {
    let count = this.nombreDeChiffres(phone);
    return count == 8;
  }
}
