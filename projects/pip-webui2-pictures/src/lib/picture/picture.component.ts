import {
    Component,
    Input,
    Output,
    OnInit,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Renderer2,
    ElementRef,
    ChangeDetectorRef,
    ViewChild
} from '@angular/core';

import { setImageMarginCSS, setErrorImageCSS, setErrorIconCSS, debounce } from '../shared/picture-utils';
import { MatIcon } from '@angular/material';

@Component({
    selector: 'pip-picture',
    templateUrl: 'picture.component.html',
    styleUrls: ['./picture.component.scss']
})
export class PipPictureComponent implements OnInit, OnDestroy, AfterViewInit {
    public source: string = null;
    public letter: string;
    private _imageBlock: HTMLElement;
    private _defaultIconBlock: HTMLElement;
    // private _icon: HTMLElement;
    private _defaultColorOpacity = '0.56';
    private _opacity: string = null;

    private _image: any;
    private _loaded = false;

    private onResize: any;

    @Input() resize = true;
    @Input() set src(source: string) {
        this.source = source;
    }
    @Input() defaultIcon = 'image';
    @Input() set letterIcon(letter: string) {
        this.letter = letter && letter.length ? letter.charAt(0) : null;
        // this.renderer.setElementProperty(this.elRef.nativeElement.querySelector('.pip-letter-icon'), 'innerText', l);
        // this.renderer.setElementStyle(this.elRef.nativeElement.querySelector('.pip-letter-icon'), 'display', l ? 'block' : 'none');
        // this.renderer.setElementStyle(this.elRef.nativeElement.querySelector('mat-icon'), 'display', l ? 'none' : 'initial');
    }
    @Input() set backgroundColor(color: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
    }
    @Input() set foregroundColor(color: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
    }
    @Input() foregroundColorOpacity = '0.56';
    // tslint:disable-next-line:no-output-rename
    @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
    // tslint:disable-next-line:no-output-rename
    @Output('onImageError') imageErrorEvent: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('svgIcon') private svgIcon: MatIcon;
    @ViewChild('fontIcon') private fontIcon: MatIcon;

    ngOnInit() {
        this._imageBlock = this.elRef.nativeElement.querySelector('img');
        this._defaultIconBlock = this.elRef.nativeElement.querySelector('div');
        // this._icon = this.elRef.nativeElement.querySelector('mat-icon');
        // if (this._opacity == null) {
        //     this.renderer.setElementStyle(
        //         this._icon, 'opacity', this._defaultColorOpacity
        //     );
        // }
    }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef
    ) {

        this.onResize = debounce(() => {
            if (this._loaded) {
                setImageMarginCSS(this.elRef.nativeElement, this._image, {});
            } else if (!this.letter) {
                setErrorIconCSS(this.elRef.nativeElement, this.getCurrentIconElement(), {});
            }
        }, 20);
    }

    ngAfterViewInit() {
        this.renderer.addClass(this.elRef.nativeElement, 'pip-picture');
        if (this.resize) {
            window.addEventListener('resize', this.onResize);
        }
    }

    public onImageError($event) {
        this._image = $event.path ? $event.path[0] : $event.target || null;

        setErrorImageCSS(this._image, {});
        if (!this.letter) { setErrorIconCSS(this.elRef.nativeElement, this.getCurrentIconElement(), {}); }
        if (this._image) { this.renderer.setStyle(this._image, 'display', 'none'); }
        this.renderer.setStyle(this._defaultIconBlock, 'display', 'flex');
        this._loaded = false;
        if (this.imageErrorEvent) { this.imageErrorEvent.emit({ event: $event, image: this._image }); }
    }

    public onImageLoad($event) {
        this._image = $event.path ? $event.path[0] : $event.target || null;

        setImageMarginCSS(this.elRef.nativeElement, this._image, {});
        if (this._image) { this.renderer.setStyle(this._image, 'display', 'flex'); }
        this.renderer.setStyle(this._defaultIconBlock, 'display', 'none');
        this._loaded = true;
        if (this.imageLoadEvent) { this.imageLoadEvent.emit({ event: $event, image: this._image }); }
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.onResize);
    }

    private getCurrentIconElement(): HTMLElement {
        return this.defaultIcon.includes('-')
            ? this.fontIcon._elementRef.nativeElement
            : this.svgIcon._elementRef.nativeElement;
    }

}
