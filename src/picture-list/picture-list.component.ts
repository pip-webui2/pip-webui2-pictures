import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-picture-list',
    templateUrl: 'picture-list.component.html',
    styleUrls: ['./picture-list.component.scss']
})
export class PipPictureListComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-list', true);
    }

    ngAfterViewInit() {

    }
}