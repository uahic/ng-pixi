import { Graphics } from 'pixi.js';
import { NgPixiViewportService } from './../../projects/ng-pixi-lib/src/lib/ng-pixi-viewport.service';
import { Directive, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBrush]'
})
export class BrushDirective implements AfterViewInit {
  graphics: Graphics;

  constructor(private viewport: NgPixiViewportService) {
    this.graphics = new Graphics();
    console.log(viewport.viewport);
    // this.viewport.viewport.on('moved', (event) => { console.log('moove') });
  }

  ngAfterViewInit(): void {
    // this.viewport.interaction.addListener('mousemove', () => console.log('schwups'));
  }



}
