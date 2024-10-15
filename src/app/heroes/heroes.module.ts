import { HeroeComponent } from "./components/heroe/heroe.component";
import { NgModule } from "@angular/core";
import { ListaComponent } from "./components/lista/lista.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    ListaComponent,
    HeroeComponent,
  ],
  exports:[
    HeroeComponent,
    ListaComponent,
  ],
  imports:[
    CommonModule,

  ]
})
export class HeroesModule{}
