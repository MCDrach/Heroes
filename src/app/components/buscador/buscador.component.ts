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
  termino: string;
  constructor(
    private activeRouter: ActivatedRoute,
    private heroeService: HeroesService
    ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(x => {
      this.termino = x.termino;
      this.heroes = this.heroeService.buscarHeroes(x.termino);
    });
  }

}
