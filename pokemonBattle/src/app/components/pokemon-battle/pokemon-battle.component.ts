import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon-list.interface';
import { PokemonBattleService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent {
  listPokemon: Pokemon[] = [];
  pokemon1: Pokemon | undefined;
  pokemon2: Pokemon | undefined;
  turnoActual: 'pokemon1' | 'pokemon2' = 'pokemon1';
  isAttacking: boolean = false;

  constructor(private pokemonService: PokemonBattleService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.listPokemon = resp.results;
      this.getRandomPokemons();
    });
  }

  getRandomPokemons(): void {
    if (this.listPokemon.length > 1) {
      const indices = this.getTwoRandom(this.listPokemon.length);
      this.pokemon1 = this.listPokemon[indices[0]];
      this.pokemon2 = this.listPokemon[indices[1]];
    }
  }

  atacar(): void {
    if (!this.isAttacking) {
      this.isAttacking = true;
      this.turnoActual = this.turnoActual === 'pokemon1' ? 'pokemon2' : 'pokemon1';
      this.isAttacking = false;
    }
  }

  private getTwoRandom(max: number): [number, number] {
    let index1 = Math.floor(Math.random() * max);
    let index2 = Math.floor(Math.random() * max);
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * max);
    }
    return [index1, index2];
  }


}
