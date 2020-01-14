import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/models/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = []
  constructor(
    private _heroesServices: HeroesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(index: number) {
    // console.log(index)
    this.router.navigate(['heroe', index]);
  }

}
