import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {

  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  winner: string | undefined;
  isBattleOver: boolean = false;

  applyDamage(damage: number) {
    if (this.isBattleOver) return;

    if (this.pokemonTurn === 1) {
      this.lifePokemon2 -= damage;
      if (this.lifePokemon2 <= 0) {
        this.lifePokemon2 = 0;
        this.isBattleOver = true;
      } else {
        this.pokemonTurn = 2;
      }
    } else {
      this.lifePokemon1 -= damage;
      if (this.lifePokemon1 <= 0) {
        this.lifePokemon1 = 0;
        this.isBattleOver = true;
      } else {
        this.pokemonTurn = 1;
      }
    }
  }

  handleDefeat(player: number) {
    this.isBattleOver = true;
    this.winner = player === 1 ? '¡El Pokémon 2 es el ganador!' : '¡El Pokémon 1 es el ganador!';
  }
}

