import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarAngularMaterialComponent } from './components/progress-bar-angular-material/progress-bar-angular-material.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressBarAngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
