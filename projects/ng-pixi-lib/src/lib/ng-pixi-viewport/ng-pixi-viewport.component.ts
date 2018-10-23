import { Container } from 'pixi.js';
import { NgPixiViewportService } from './../ng-pixi-viewport.service';
import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit, HostListener } from '@angular/core';

export function containerFactory(viewport: NgPixiViewportService) {
    return <Container>viewport.viewport;
}

@Component({
    selector: 'npl-ng-pixi-viewport',
    templateUrl: './ng-pixi-viewport.component.html',
    styleUrls: ['./ng-pixi-viewport.component.scss'],
    providers: [
        NgPixiViewportService,
        {
            provide: Container,
            useFactory: containerFactory,
            deps: [NgPixiViewportService]
        }
    ]
})
export class NgPixiViewportComponent implements OnInit, AfterViewInit {
    @ViewChild('fullWHWrapper') wrapper: ElementRef;
    @ViewChild('stageDiv') stageDiv: ElementRef;

    constructor(
        public viewport: NgPixiViewportService,
        private ngZone: NgZone) {
        this.ngZone.runOutsideAngular(() => {
            this.init();
        });
        this.ngZone.onUnstable.subscribe(() => console.log('Ng zone triggered'));
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.resizeViewport(event.target.innerWidth, event.target.innerHeight);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.stageDiv.nativeElement.appendChild(this.viewport.app.view);
        const wrapper = this.wrapper.nativeElement;
        this.resizeViewport(wrapper.clientWidth, wrapper.clientHeight);
    }

    resizeViewport(width: number, height: number) {
        const viewport = this.viewport.viewport;
        const app = this.viewport.app;
        app.renderer.resize(width, height);
        viewport.resize(width, height);
    }

    init() {
        // const viewport = new Viewport({
        //     screenWidth: 400,
        //     screenHeight: 400,
        //     worldWidth: 400,
        //     worldHeight: 400,
        //     interaction: app.renderer.plugins.interaction,
        //     passiveWheel: false,
        // });
        const app = this.viewport.app;
        const viewport = this.viewport.viewport;
        viewport.drag(<any>{ clampWheel: true });
        viewport.pinch();
        viewport.decelerate();
        viewport.wheel({ smooth: 3 });
        app.stage.addChild(viewport);
        app.start();
    }


}
