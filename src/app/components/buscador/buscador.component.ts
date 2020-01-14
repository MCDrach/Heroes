import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/Heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[];
  constructor(
    private activeRouter: ActivatedRoute,
    private heroeService: HeroesService
    ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(x => {
      console.log(x.termino);
      this.heroes = this.heroeService.buscarHeroes(x.termino);
      console.log(this.heroes);
    });
  }

}
