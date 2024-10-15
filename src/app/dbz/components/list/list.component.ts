import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OutputEmitterRef } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    standalone: false,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
   // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();

  onDeleteCharacter(id?:string):void{
    if (!id) return;
    this.onDelete.emit(id)
    //console.log({index})

  }

 }
