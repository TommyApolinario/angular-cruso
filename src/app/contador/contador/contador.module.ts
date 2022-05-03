 import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ContadorComponent } from "./contador.component";
import { ListadoComponent } from '../../Heroes/listado/listado.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports:[
    ContadorComponent
    ]
})

 export class contadorModule{


 }