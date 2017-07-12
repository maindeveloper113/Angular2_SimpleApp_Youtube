import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) {
    }
    
    ngOnInit() {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(1, 5)
        )
    }
}