import { Container, Application, interaction } from 'pixi.js';
import { Injectable, NgZone } from '@angular/core';
import * as Viewport from 'pixi-viewport';

@Injectable({
  providedIn: 'root'
})
export class NgPixiViewportService {
  viewport: Viewport;
  app: Application;
  interaction: interaction.InteractionManager;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {

      this.app = new Application();
      this.viewport = new Viewport({
        screenWidth: 400,
        screenHeight: 400,
        worldWidth: 400,
        worldHeight: 400,
        interaction: this.app.renderer.plugins.interaction,
        passiveWheel: false,
      });
      this.app.stage.interactive = true;
    });
  }

}
