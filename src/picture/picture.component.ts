import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-picture',
    templateUrl: 'picture.component.html',
    styleUrls: ['./picture.component.scss']
})
export class PipPictureComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture', true);
    }

    ngAfterViewInit() {

    }
}