import { Component } from '@angular/core';
import { Button } from "../../shared/components/button/button";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [Button,CommonModule],
  templateUrl: './home-page.html',
})
export class HomePage {
  constructor(private router:Router){}
  action(){
    this.router.navigate(['/login'])
  }
}
