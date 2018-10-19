import { Graphics } from 'pixi.js';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'app';
  graphics: Graphics;

  constructor() {
    this.graphics = new Graphics();
    this.graphics.lineStyle(5, 0xFFFFFF, 1);
    this.graphics.beginFill(0x0000FF, 1);
    this.graphics.drawCircle(150, 150, 100);
    this.graphics.endFill();
    this.graphics.alpha = 0.5;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.graphics.x = 400;
      this.graphics.lineStyle(10, 0x5523FF, 1);
    }, 4000);
  }

  ngOnDestroy(): void {
  }

  onRequestFullscreen() {
    // this.GoInFullscreen(this.stageDisplay.nativeElement);
  }

  GoInFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
}
