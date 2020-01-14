import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/Heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(
    private heroeService: HeroesService,
    private activateRouter: ActivatedRoute
  ) {
   }

  ngOnInit() {

    this.activateRouter.params.subscribe( x => {
      console.log(x.id);
      this.heroe = this.heroeService.getHeroe(x.id);
      console.log(this.heroe);
    });

  }

}
