import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login-form.html',
})
export class LoginForm {
  form!:FormGroup
    constructor(private fb:FormBuilder, private router:Router){
      this.form = this.fb.group({
        email:["",Validators.required],
        password:["",Validators.required]
      })
    }
 handleSubmit(){
   this.form.markAllAsTouched()
 }
    get field(){
      return this.form.controls
    }
}
