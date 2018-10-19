import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgPixiLibModule } from 'ng-pixi-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPixiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
