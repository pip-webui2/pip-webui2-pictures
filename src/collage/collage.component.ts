import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-collage',
    templateUrl: 'collage.component.html',
    styleUrls: ['./collage.component.scss']
})
export class PipCollageComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-collage', true);
    }

    ngAfterViewInit() {

    }
}