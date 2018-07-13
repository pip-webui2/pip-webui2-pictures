import { Component, Input, Output, OnInit, AfterViewInit, ViewChild, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { addPasteListener, removePasteListener } from '../shared/picture-utils';
import { PipAddImageComponent} from '../add-image/add-image.component';

@Component({
    selector: 'pip-picture-edit',
    templateUrl: 'picture-edit.component.html',
    styleUrls: ['./picture-edit.component.scss']
})
export class PipPictureEditComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    public imageSource: string = null;
    private _pasteElement: any = null;

    @Input() public defaultIcon: string = null;
    @Input() set src(source: string) {
        this.imageSource = source;
    }

    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output('onImageDelete') imageDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(PipAddImageComponent) addImage: PipAddImageComponent;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-edit', true);
    }

    ngAfterViewInit() {
        this._pasteElement = addPasteListener((event) => {
            this.imageSource = event.url;
            this.imageLoadEvent.emit(event);
        });

        this.renderer.listen(this.elRef.nativeElement, 'keypress', (event) => {
            if (event.keyCode == 32 || event.keyCode == 13) this.addImage.menu.openMenu();
        })
    }

    ngOnDestroy() {
        removePasteListener(this._pasteElement);
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