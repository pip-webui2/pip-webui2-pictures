import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-picture-list-edit',
    templateUrl: 'picture-list-edit.component.html',
    styleUrls: ['./picture-list-edit.component.scss']
})
export class PipPictureListEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-list-edit', true);
    }

    ngAfterViewInit() {

    }
}