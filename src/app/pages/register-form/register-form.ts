import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule,RouterLink, Button],
  templateUrl: './register-form.html',
})
export class RegisterForm {
  showpassworderror = signal<boolean>(false);
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(3)],
      ],
      workingEmail: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(25)]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  passwordMatching() {
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.showpassworderror.set(true);
    } else {
      this.showpassworderror.set(false);
    }
  }

  handleSubmit() {
    this.form.markAllAsTouched();
    this.passwordMatching();

    if (this.showpassworderror()) return;

    if (this.form.invalid) return;

    if(this.form.valid){
      console.log('here is the val', this.form.value);
      this.form.reset()
      this.router.navigate(['/login'])
    }

  }

  get fields() {
    return this.form.controls;
  }
}
