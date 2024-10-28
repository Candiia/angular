import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Pokemon } from '../../models/pokemon-list.interface';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonDetailComponent {


  @Input() pokemon: Pokemon | undefined;
  @Input() onePokemon: PokemonDetailResponse | undefined;
  @Output() pokemonAtaque = new EventEmitter<string>();


  atacar(atacarPokemon: Pokemon | undefined) {
    console.log('ataque:', atacarPokemon);
    this.pokemonAtaque.emit(atacarPokemon?.url.split('/')[5]);
  }

}
