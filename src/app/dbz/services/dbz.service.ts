// a-service tab
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
// es para generar id automáticos y unicos


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name: 'Goku',
    power: 9500
  },{
    id:uuid(),
    name:'Mario',
    power:15545454
  }];

  addCharacter(character:Character):void{
    //debugger
    const newCharacter:Character={id:uuid(), ...character}

    this.characters.push(newCharacter);
    //console.log(character);

  }
  // onDeleteCharacter(i:number):void{
  //   this.characters.splice(i,1);
    // el 1 es para que borre solo 1

    deleteCharacterById(id:string) {
      this.characters=this.characters.filter(character=> character.id!==id);

    }
}


