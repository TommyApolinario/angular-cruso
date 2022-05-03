import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { HeroeComponent } from '../heroe/heroe.component';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Dr.Sexo'];
  heroeBorrado: string = '';
  EliminarHeroe(){

     this.heroeBorrado = this.heroes.shift() || '';
    
  }

}


