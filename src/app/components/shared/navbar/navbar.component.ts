import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Heroe } from 'src/app/models/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(
     private router: Router
  ) { }

  ngOnInit() {
  }

  BuscarHeroe(termino: string) {
    this.router.navigate(['/buscador', termino]);
  }
}
