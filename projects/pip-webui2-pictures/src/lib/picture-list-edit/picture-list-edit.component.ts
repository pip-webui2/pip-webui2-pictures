import {
    trigger,
    transition,
    style,
    animate,
} from '@angular/animations';
import {
    Component,
    Input,
    Output,
    OnInit,
    AfterViewInit,
    EventEmitter,
    Renderer,
    ElementRef,
    ViewChild
} from '@angular/core';

import { PipPictureEditComponent } from '../picture-edit/picture-edit.component';

@Component({
    selector: 'pip-picture-list-edit',
    templateUrl: 'picture-list-edit.component.html',
    styleUrls: ['./picture-list-edit.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ width: '0', opacity: '0' }),
                animate('.35s ease', style({ width: '80px', opacity: '1' })),
            ]),
            transition(':leave', [
                style({ width: '80px', opacity: '1', 'margin-right': '8px' }),
                animate('.35s ease', style({ width: '0', opacity: '0', 'margin-right': '0' })),
            ])
        ]),
    ]
})
export class PipPictureListEditComponent implements OnInit, AfterViewInit {

    public imageSources: string[] = [];
    @Input() set srcs(sources: string[]) {
        this.imageSources = sources;
    }
    @Input() width: number | string = '80px';
    @Input() height: number | string = '80px';
    @Input() defaultIcon: string = null;
    @Input() defaultAddIcon = 'add';
    @ViewChild(PipPictureEditComponent) private _editComponent: PipPictureEditComponent;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onUpdateImages: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture-list-edit', true);
    }

    ngOnInit() { }

    ngAfterViewInit() {

    }

    public onImageLoad(event) {
        this.imageSources.push(event.url);
        this._editComponent.removeImage();
        this.updtaeImagesCallback();
    }

    public onDeleteClick(index) {
        this.removeImagebyIndex(index);
    }

    public onDeletePress(event) {
        this.removeImagebyIndex(event.index);
    }

    private removeImagebyIndex(index: number) {
        if (index > -1 && index < this.imageSources.length) {
            this.imageSources.splice(index, 1);
            this.updtaeImagesCallback();
        }
    }

    private updtaeImagesCallback() {
        if (this.onUpdateImages) { this.onUpdateImages.emit(this.imageSources); }
    }
}
