import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register-form.html',
})
export class RegisterForm {

}
