import { Injectable, NgZone } from '@angular/core';
import { Application } from 'pixi.js';
import * as PIXI from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class NGPixiService {
  app: PIXI.Application;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application();
    });
  }

}
