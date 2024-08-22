import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { Route } from '@angular/router';
@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [NgFor, NgIf,ReactiveFormsModule,],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css',
})
export class ForgetpassComponent {
  
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user() {
    return this.loginForm.get('user');
  };
 
}
