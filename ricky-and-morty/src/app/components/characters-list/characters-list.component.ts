import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../../services/character-service.service';
import { Characters, CharactersListResponse } from '../../models/characters.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit{

  characterList: Characters[] = [];

  constructor(private characterServices: CharacterServiceService){}
  
  ngOnInit(): void {
    this.characterServices.getCharacterList().subscribe(respuesta => 
      this.characterList = respuesta.results);
    
  }




}
