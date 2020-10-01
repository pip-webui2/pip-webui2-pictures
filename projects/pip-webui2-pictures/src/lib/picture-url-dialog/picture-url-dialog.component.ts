import { Component, Inject, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { PictureUrlDialogTranslations } from './shared/picture-url-dialog.translations';

/**
 * @title Dialog Overview
 */

@Component({
    selector: 'pip-picture-url-dilaog',
    templateUrl: 'picture-url-dialog.component.html',
    styleUrls: ['./picture-url-dialog.component.scss']
})
export class PipPictureUrlDialogComponent implements AfterViewInit {
    public imageLink: string = null;
    public imageLoaded = false;
    private dataUrl: any = null;

    constructor(
        public dialogRef: MatDialogRef<PipPictureUrlDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private renderer: Renderer2,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        this.translate.setTranslation('en', PictureUrlDialogTranslations.en, true);
        this.translate.setTranslation('ru', PictureUrlDialogTranslations.ru, true);
    }

    public onImageLoad(event) {
        this.dataUrl = this.imageLink;
        this.imageLoaded = true;
    }

    public onImageError() {
        this.dataUrl = null;
        this.imageLoaded = false;
    }

    ngAfterViewInit() {
        this.renderer.setStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
    }

    public onSave() {
        this.data.img = { url: this.dataUrl };
        this.dialogRef.close(this.data);
    }

    public onClose() {
        this.data.img = null;
        this.dialogRef.close();
    }

}
