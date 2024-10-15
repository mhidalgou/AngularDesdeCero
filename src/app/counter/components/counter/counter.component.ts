
//! se crea con un sniper a-component + tab, y se cambian los nombre


import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template:
  `
    <h3>Contador: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset(10)">Reset</button>
  `
})

export class CounterComponent  {
  public counter: number=10;

  increaseBy(valor:number):void{
    this.counter+=valor;
  }

  reset(valor:number):void{
    this.counter=valor
  }

}
