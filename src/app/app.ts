import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterForm } from './register-form/register-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RegisterForm],
  templateUrl: './app.html',
})
export class App {

}
