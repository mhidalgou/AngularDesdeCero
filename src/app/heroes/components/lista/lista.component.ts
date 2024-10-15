import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroNombres: string[]=['Spiderman','Iroman','Hulk','She Hulk','Thor'];
  public heroeBorrado?:string;


  borrarUltimoHeroe():void{
      this.heroeBorrado=this.heroNombres.pop();

    }
}
