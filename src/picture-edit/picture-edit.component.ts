import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'pip-picture-edit',
    templateUrl: 'picture-edit.component.html',
    styleUrls: ['./picture-edit.component.scss']
})
export class PipPictureEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    public imageSource: string = null;

    @Input() public defaultIcon: string = null;
    @Input() set src(source: string) {
        console.log('this.imageSource', this.imageSource);
        this.imageSource = source;
    }

    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output('onImageDelete') imageDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-edit', true);
    }

    ngAfterViewInit() {

    }

    public onImageLoad(results) {
        if (!results || !results.img) return;
        this.imageSource = results.img.url;
        this.imageLoadEvent.emit(results.img);
    }

    public onDeleteClick(event) {
        event.cancelBubble = true;
        this.removeImage();
    }

    public removeImage() {
        this.imageSource = null;
        this.imageDeleteEvent.emit();
    }
}