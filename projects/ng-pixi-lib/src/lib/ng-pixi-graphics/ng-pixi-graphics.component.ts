import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Container, Graphics, GraphicsData, Circle, Rectangle } from 'pixi.js';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'npl-ng-pixi-graphics',
  templateUrl: './ng-pixi-graphics.component.html',
  styleUrls: ['./ng-pixi-graphics.component.css']
})
export class NgPixiGraphicsComponent implements OnInit, AfterViewInit, OnDestroy {

  graphic: Graphics;
  private _graphics$: BehaviorSubject<Graphics>;
  private _unsubscribe$: Subject<any>;

  constructor(private container: Container) {
    this._graphics$ = new BehaviorSubject<Graphics>(undefined);
    this._unsubscribe$ = new Subject<any>();
  }

  @Input() set graphics(value: Graphics) {
    if (!value) {
      return;
    }
    if (!!this._graphics$.getValue()) {
      this.container.removeChild(this._graphics$.getValue());
    }
    this._graphics$.next(value);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this._graphics$.pipe(
      takeUntil(this._unsubscribe$)
    ).
    subscribe(graphics => this.setGraphics(graphics));
  }

  setGraphics(graphics: Graphics) {
    if (!!graphics) {
      this.container.addChild(graphics);
    }
  }

}
