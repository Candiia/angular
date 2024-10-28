import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-list.interface';
import { PokemonBattleService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit{
  
  listPokemon: Pokemon[] = [];
 
  constructor(private pokemonService: PokemonBattleService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.listPokemon = resp.results;
    });
  }



}
