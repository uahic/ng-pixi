import { Container } from 'pixi.js';
import { NGPixiStageComponent } from './../ng-pixi-stage/ng-pixi-stage.component';
import { NGPixiService } from './../ng-pixi.service';
import { NgPixiViewportService } from './../ng-pixi-viewport.service';
import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

export function containerFactory(viewport: NgPixiViewportService) {
    return <Container>viewport.viewport;
}

@Component({
    selector: 'ng-pixi-viewport',
    templateUrl: './ng-pixi-viewport.component.html',
    styleUrls: ['./ng-pixi-viewport.component.scss'],
    providers: [
        NGPixiService,
        NgPixiViewportService,
        {
            provide: Container,
            useFactory: containerFactory,
            deps: [NgPixiViewportService]
        }
    ]
})
export class NgPixiViewportComponent implements OnInit, AfterViewInit {
    @ViewChild(NGPixiStageComponent) stage: NGPixiStageComponent;
    @ViewChild('fullWHWrapper') wrapper: ElementRef;

    constructor(
        public viewport: NgPixiViewportService,
        private pixi: NGPixiService,
        private ngZone: NgZone) {
        this.ngZone.runOutsideAngular(() => {
            this.viewport.init(this.pixi.app, 200, 200, 200, 200);
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.resizeViewport(event.target.innerWidth, event.target.innerHeight);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        const wrapper = this.wrapper.nativeElement;
        this.resizeViewport(wrapper.clientWidth, wrapper.clientHeight);
    }

    resizeViewport(width: number, height: number) {
        const viewport = this.viewport.viewport;
        const app = this.pixi.app;
        app.renderer.resize(width, height);
        viewport.resize(width, height);
    }

}
