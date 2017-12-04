import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-picture-edit',
    templateUrl: 'picture-edit.component.html',
    styleUrls: ['./picture-edit.component.scss']
})
export class PipPictureEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    public imageSource: string = null;

    @Input() set src(source: string) {
        this.imageSource = source;
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-edit', true);
    }

    ngAfterViewInit() {

    }

    public onImageLoad(results) {
        this.imageSource = results.img.url;
    }

    public onDeleteClick(event) {
        event.cancelBubble = true;
        this.imageSource = null;
    }
}