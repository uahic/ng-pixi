import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NGPixiService } from '../ng-pixi.service';
import { Container } from 'pixi.js';

@Component({
  selector: 'npl-ng-pixi-stage',
  templateUrl: './ng-pixi-stage.component.html',
  styleUrls: ['./ng-pixi-stage.component.scss']
})
export class NGPixiStageComponent implements OnInit, AfterViewInit {
  @ViewChild('stageDiv') stageDiv: ElementRef;

  stage: Container;
  constructor(private pixi: NGPixiService) {
    this.stage = pixi.app.stage;
  }

  ngAfterViewInit() {
    this.stageDiv.nativeElement.appendChild(this.pixi.app.view);
  }

  ngOnInit() {
  }

}
