import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
})
export class RegisterForm {
  form!:FormGroup

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      firstName:["",[Validators.required, Validators.minLength(2)]],
      lastName:["",[Validators.required,Validators.minLength(1), Validators.maxLength(3)]],
      workingEmail:["",[Validators.required, Validators.email]],
      number:["",[Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      age:["",[Validators.required, Validators.min(15), Validators.max(25)]],
      gender:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["",Validators.required]
    })
  }

  handleSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched()
      return 
    }
  }

  get fields(){
    return this.form.controls
  }
}


