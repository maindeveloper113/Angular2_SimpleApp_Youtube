import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  hero: Hero;

  constructor() {
    this.title  = 'Tour of Heroes';
    this.hero = {id:1, name: "Alic"};
  }
 
  
}


