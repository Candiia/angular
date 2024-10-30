import { Pipe, PipeTransform } from '@angular/core';
import { PokemonResponse } from '../models/pokemon-response.interface';

@Pipe({
  name: 'imgPokemon'
})
export class ImgPokemonPipe implements PipeTransform {

  transform(pokemon: number): string {
    return `'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ ${pokemon}'.png'`;
  }

}
