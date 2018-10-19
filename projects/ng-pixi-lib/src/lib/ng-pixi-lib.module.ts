import { NgModule } from '@angular/core';
import { NGPixiStageComponent } from './ng-pixi-stage/ng-pixi-stage.component';
import { NgPixiViewportComponent } from './ng-pixi-viewport/ng-pixi-viewport.component';
import { NgPixiViewportService } from './ng-pixi-viewport.service';
import { NgPixiRectComponent } from './ng-pixi-rect/ng-pixi-rect.component';
import { NgPixiGraphicsComponent } from './ng-pixi-graphics/ng-pixi-graphics.component';

@NgModule({
  imports: [],
  declarations: [NGPixiStageComponent, NgPixiViewportComponent, NgPixiRectComponent, NgPixiGraphicsComponent],
  exports: [NgPixiViewportComponent, NgPixiRectComponent, NgPixiGraphicsComponent],
  providers: [NgPixiViewportService]
})
export class NgPixiLibModule { }
