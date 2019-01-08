import {
    Component,
    Input,
    Output,
    OnInit,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Renderer,
    ElementRef,
    ChangeDetectorRef
} from '@angular/core';

import { setImageMarginCSS, setErrorImageCSS, setErrorIconCSS, debounce } from '../shared/picture-utils';

@Component({
    selector: 'pip-picture',
    templateUrl: 'picture.component.html',
    styleUrls: ['./picture.component.scss']
})
export class PipPictureComponent implements OnInit, OnDestroy, AfterViewInit {
    public source: string = null;
    private _imageBlock: HTMLElement;
    private _defaultIconBlock: HTMLElement;
    private _icon: HTMLElement;
    private _defaultColorOpacity = '0.56';
    private _opacity: string = null;

    private _image: any;
    private _loaded = false;

    private onResize: any;

    @Input() resize = true;
    @Input() set src(source: string) {
        this.source = source;
    }
    @Input() defaultIcon: string = null;
    @Input() set letterIcon(letter: string) {
        const l = letter && letter.length ? letter.charAt(0) : null;
        this.renderer.setElementProperty(this.elRef.nativeElement.querySelector('.pip-letter-icon'), 'innerText', l);
        this.renderer.setElementStyle(this.elRef.nativeElement.querySelector('.pip-letter-icon'), 'display', l ? 'block' : 'none');
        this.renderer.setElementStyle(this.elRef.nativeElement.querySelector('mat-icon'), 'display', l ? 'none' : 'initial');
    }
    @Input() set backgroundColor(color: string) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', color);
    }
    @Input() set foregroundColor(color: string) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'color', color);
    }
    @Input() set foregroundColorOpacity(opacity: string) {
        this._opacity = opacity;
        this.renderer.setElementStyle(
            this.elRef.nativeElement.querySelector('.pip-letter-icon'),
            'opacity',
            opacity || this._defaultColorOpacity
        );
        this.renderer.setElementStyle(
            this.elRef.nativeElement.querySelector('mat-icon'),
            'opacity',
            opacity || this._defaultColorOpacity
        );
    }
    // tslint:disable-next-line:no-output-rename
    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onImageError') imageErrorEvent: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        this._imageBlock = this.elRef.nativeElement.querySelector('img');
        this._defaultIconBlock = this.elRef.nativeElement.querySelector('div');
        this._icon = this.elRef.nativeElement.querySelector('mat-icon');
        if (this._opacity == null) {
            this.renderer.setElementStyle(
                this._icon, 'opacity', this._defaultColorOpacity
            );
        }
    }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-picture', true);

        this.onResize = debounce(() => {
            if (this._loaded) {
                setImageMarginCSS(this.elRef.nativeElement, this._image, {});
            } else {
                setErrorIconCSS(this.elRef.nativeElement, this._icon, {});
            }
        }, 20);
    }

    ngAfterViewInit() {
        if (this.resize) {
            window.addEventListener('resize', this.onResize);
        }
    }

    public onImageError($event) {
        this._image = $event.path ? $event.path[0] : null;

        setErrorImageCSS(this._image, {});
        setErrorIconCSS(this.elRef.nativeElement, this._icon, {});
        this._image.style.cssText += 'display: none';
        this._defaultIconBlock.style.cssText += 'display: flex';
        this._loaded = false;
        if (this.imageErrorEvent) { this.imageErrorEvent.emit({ event: $event, image: this._image }); }
    }

    public onImageLoad($event) {
        this._image = $event.path ? $event.path[0] : null;

        setImageMarginCSS(this.elRef.nativeElement, this._image, {});
        this._image.style.cssText += 'display: flex';
        this._defaultIconBlock.style.cssText += 'display: none';
        this._loaded = true;
        if (this.imageLoadEvent) { this.imageLoadEvent.emit({ event: $event, image: this._image }); }
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.onResize);
    }

}
