import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaPipesComponent } from './components/prueba-pipes/prueba-pipes.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { CustomEurPipe } from './piper/custom-eur.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PruebaPipesComponent,
    CustomEurPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'shortDate'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
