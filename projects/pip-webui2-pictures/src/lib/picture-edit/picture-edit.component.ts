import { Component, Input, Output, OnInit, OnDestroy, AfterViewInit, ViewChild, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

import { addPasteListener, removePasteListener } from '../shared/picture-utils';
import { PipAddImageComponent } from '../add-image/add-image.component';

@Component({
    selector: 'pip-picture-edit',
    templateUrl: 'picture-edit.component.html',
    styleUrls: ['./picture-edit.component.scss']
})
export class PipPictureEditComponent implements OnInit, OnDestroy, AfterViewInit {

    public imageSource: string = null;
    private _pasteElement: any = null;

    @Input() public defaultIcon: string = null;
    @Input() public letterIcon: string = null;
    @Input() public deleteIcon = 'clear';
    @Input() set src(source: string) {
        this.imageSource = source;
    }

    // tslint:disable-next-line:no-output-rename
    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onImageDelete') imageDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(PipAddImageComponent, { static: true }) addImage: PipAddImageComponent;

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-picture-edit');
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this._pasteElement = addPasteListener((event) => {
            this.imageSource = event.url;
            this.imageLoadEvent.emit(event);
        });

        this.renderer.listen(this.elRef.nativeElement, 'keypress', (event) => {
    if (event.keyCode === 32 || event.keyCode === 13) {
        this.addImage.menu.openMenu();
    }
});
    }

    ngOnDestroy() {
        removePasteListener(this._pasteElement);
    }

    public onImageLoad(results) {
        if (!results || !results.img) { return; }
        this.imageSource = results.img.url;
        this.imageLoadEvent.emit(results.img);
    }

    public onImageError() {
        this.imageSource = null;
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
