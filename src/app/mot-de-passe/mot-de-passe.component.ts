import { Component } from '@angular/core';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent {
  isEmail:boolean=false;
  Email:string="";
  onSubmitForm(){
  this.isEmail=false;
      //---------------
      if (this.Email == null||this.Email==undefined||this.Email=="") {
        this.isEmail = true;
      }
     
  
      
    }
    
     estValide(email: string): boolean {
          return email.endsWith('@gmail.com');
     }

}
