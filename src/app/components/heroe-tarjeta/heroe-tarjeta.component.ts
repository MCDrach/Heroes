import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../models/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = new Heroe();
  @Input() index: number;
  // @Output() heroeSeleccionado = new EventEmitter<number>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verHeroe(){
    // console.log('index',this.index);
    this.router.navigate(['heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
