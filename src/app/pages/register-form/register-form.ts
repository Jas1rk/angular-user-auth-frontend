import { Component } from '@angular/core';
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
      age:["",Validators.required]
    })
  }

  handleSubmit(){

  }

  get fields(){
    return this.form.controls
  }
}
