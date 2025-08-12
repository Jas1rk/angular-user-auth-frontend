import { Component } from '@angular/core';
import { Button } from '../button/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Button,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router:Router){}
  login(){
    this.router.navigate(['/login'])
  }
}
