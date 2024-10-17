import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForComponent } from './components/for/for.component';
import { PhonePrefixListComponent } from './components/phone-prefix-list/phone-prefix-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ForComponent,
    PhonePrefixListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
