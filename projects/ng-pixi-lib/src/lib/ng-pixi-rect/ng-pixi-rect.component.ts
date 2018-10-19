import { Container, Graphics } from 'pixi.js';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'npl-ng-pixi-rect',
  templateUrl: './ng-pixi-rect.component.html',
  styleUrls: ['./ng-pixi-rect.component.css']
})
export class NgPixiRectComponent implements OnInit, AfterViewInit {

  graphic: Graphics;
  private _options: BehaviorSubject<{}>;
  constructor(private container: Container) {
    this._options = new BehaviorSubject<PIXI.GraphicsData>(undefined);
    this.graphic = new Graphics();
  }

  @Input() set options(value: any) {
    this._options.next(value);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._options.subscribe((dict: any) => {
      if (!!dict) {
        this.graphic.clear();
        this.graphic.lineStyle(5, 0xFFFFFF, 1);
        this.graphic.beginFill(dict.fill, 1);
        // this.graphic.drawRect(dict.x, dict.y, dict.width, dict.height);
        this.graphic.drawCircle(150, 150, 100);
        this.graphic.endFill();
        // this.graphic.lineStyle(5, 0xFFFFFF, 1);
        // this.graphic.beginFill(0x0000FF, 1);
        // this.graphic.drawCircle(150, 150, 100);
        // this.graphic.endFill();
        // this.graphic.alpha = 0.5;
        this.container.addChild(this.graphic);
      }
    });
  }
}
