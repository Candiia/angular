import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-angular-material',
  templateUrl: './progress-bar-angular-material.component.html',
  styleUrl: './progress-bar-angular-material.component.css'
})
export class ProgressBarAngularMaterialComponent {

  @Input() progreso = 80;

  cambiarColor(): string {  
      if(this.progreso <= 25){
        return 'danger'
      }else if(this.progreso > 25 && this.progreso <=50){
        return 'warning'
      }else if(this.progreso > 50 && this.progreso <=75){
        return 'primary'
      }else{
        return 'success'
      }
    }
}
