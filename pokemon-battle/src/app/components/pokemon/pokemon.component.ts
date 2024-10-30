import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon-response.interface';
import { AnimationOptions } from 'ngx-lottie';
import { ImgPokemonPipe } from '../../piper/img-pokemon.pipe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/animation_explosion.json',
  };

  imgPokemon: string = '';
  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  @Input() life: number = 100;
  @Output() onAttackDone = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;
  showAnimation: boolean = false;
  @Output() onDefeat = new EventEmitter<void>();

  constructor(private pokemonService: PokemonService, private img: ImgPokemonPipe) { }

  ngOnInit(): void {
    this.pokemonService
      .getPokemon(this.pokemonId!)
      .subscribe((pokemonResponse) => {
        this.pokemon = pokemonResponse;
      });

      this.imgPokemon = this.img.transform(this.imgPokemon);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['life']) {
      if (changes['life'].firstChange === false) {
        this.showAnimation = true;
        setTimeout(() => {
          this.showAnimation = false;
        }, 1000);
      }
      if (this.life <= 0) {
        this.onDefeat.emit();
      }
    }
  }

  getProgressBarColor(): string {
    if (this.life >= 70) {
      return 'success';
    } else if (this.life >= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {
    var damage = Math.floor(Math.random() * (30 - 10) + 10);
    this.onAttackDone.emit(damage);
  }
}
