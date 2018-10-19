import { Injectable } from '@angular/core';
// import * as PIXI from 'pixi.js/dist/pixi.js';
// import * as PIXI from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class NgPixiLibService {

  constructor() {
  }
  // init(width: number, height: number) {
  //   this.app = new PIXI.Application();
  //   this.renderer = this.app.renderer;
  //   // this.renderer.autoResize = true;
  //   this.viewport = new PIXI.Container();

  //   // const interactionManager = PIXI.interaction.InteractionManager(this.renderer);
  //   // this.ticker = new PIXI.ticker.Ticker();
  //   this.viewport = new Viewport({
  //     screenWidth: 1000,
  //     screenHeight: 1000,
  //     worldWidth: 1000,
  //     worldHeight: 1000,
  //     interaction: this.app.renderer.interaction,
  //     passiveWheel: false
  //     // ticker: this.ticker
  //   });
  //   this.app.stage.addChild(this.viewport);
  //   this.viewport.drag(<any>{ clampWheel: true });
  //   this.viewport.pinch();
  //   this.viewport.decelerate();
  //   this.viewport.wheel({ smooth: 3 });
  //   this.app.start();

  // }


}
