import { Pipe, PipeTransform } from '@angular/core';
import { PokemonResponse } from '../models/pokemon-response.interface';

@Pipe({
  name: 'imgPokemon'
})
export class ImgPokemonPipe implements PipeTransform {

  transform(idPokemon:  string): string {
    return `'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ ${idPokemon}'.png'`;
  }

}
