import { Container, Application } from 'pixi.js';
import { NGPixiService } from './ng-pixi.service';
import { Injectable } from '@angular/core';
import * as Viewport from 'pixi-viewport';

@Injectable({
  providedIn: 'root'
})
export class NgPixiViewportService {
  viewport: Viewport;

  constructor() {
  }

  init(app: Application,
    screenWidth: number,
    screenHeight: number,
    worldWidth: number,
    worldHeight: number,
  ) {
    if (!!this.viewport) {
      throw new Error('The viewport (service) is already initialized!');
    }
    this.viewport = new Viewport({
      screenWidth: screenWidth,
      screenHeight: screenHeight,
      worldWidth: worldWidth,
      worldHeight: worldHeight,
      interaction: app.renderer.plugins.interaction,
      passiveWheel: false
    });
    this.viewport.drag(<any>{ clampWheel: true });
    this.viewport.pinch();
    this.viewport.decelerate();
    this.viewport.wheel({ smooth: 3 });
    app.stage.addChild(this.viewport);
    app.start();
  }

}
