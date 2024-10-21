import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersListResponse} from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private htpp: HttpClient) {}

  getCharacterList(): Observable<CharactersListResponse>{
    return this.htpp.get<CharactersListResponse>('https://rickandmortyapi.com/api/character')
  }
}
