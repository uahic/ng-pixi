import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgPixiLibModule } from 'ng-pixi-lib';
import { BrushDirective } from './brush.directive';

@NgModule({
  declarations: [
    AppComponent,
    BrushDirective
  ],
  imports: [
    BrowserModule,
    NgPixiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
