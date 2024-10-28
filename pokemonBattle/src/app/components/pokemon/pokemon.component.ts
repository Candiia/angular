import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon-list.interface';
import { PokemonDetailResponse } from '../../models/pokemon-detail.interface';
import { PokemonBattleService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonDetailComponent {


  @Input() pokemon: Pokemon | undefined;
  @Output() pokemonAtaque = new EventEmitter<void>();
  @Input() isDisabled: boolean = false;

  atacar(): void {
    if (!this.isDisabled) {
      this.pokemonAtaque.emit();
    }
  }
}
