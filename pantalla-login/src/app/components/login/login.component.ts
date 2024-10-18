import { Component, Input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
 
  email = '';
  contraseya = '';
  

  login(){
    console.log(this.email);
    console.log(this.contraseya)
  }

  constructor() {}

}
