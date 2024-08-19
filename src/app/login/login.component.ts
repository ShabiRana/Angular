import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import {FormControl,Validators, FormGroup } from '@angular/forms';
import {NgFor, NgIf} from '@angular/common'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgFor, NgIf, RouterModule, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=new FormGroup({
    user: new FormControl(''),
    password: new FormControl('',[Validators.required]),
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get pass(){
    return this.loginForm.get('password');
  }
}
