import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit{
  title: string;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.title  = 'Tour of Heroes';
    this.selectedHero = null;
  }

  ngOnInit() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero) : void {
    this.selectedHero = hero;
  }
}


