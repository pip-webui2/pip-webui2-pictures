import { Component, Inject, Renderer, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PictureUrlDialogTranslations } from './shared/picture-url-dialog.translations';
import { TranslateService } from '@ngx-translate/core';

/**
 * @title Dialog Overview
 */

@Component({
    selector: 'pip-picture-url-dilaog',
    templateUrl: 'picture-url-dialog.component.html',
    styleUrls: ['./picture-url-dialog.component.scss']
})
export class PipPictureUrlDialogComponent {
    public imageLink: string = null;
    public imageLoaded: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<PipPictureUrlDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private renderer: Renderer,
        private elRef: ElementRef,
        private translate: TranslateService
    ) {
        this.translate.setTranslation('en', PictureUrlDialogTranslations.en, true);
        this.translate.setTranslation('ru', PictureUrlDialogTranslations.ru, true);
    }

    public onImageLoad() {
        this.imageLoaded = true;
    }

    public onImageError() {
        this.imageLoaded = false;
    }

    ngAfterViewInit() {
        this.renderer.setElementStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
    }

    public onSave() {
        this.data.img = { url: this.imageLink }
        this.dialogRef.close(this.data);
    }

    public onClose() {
        this.data.img = null;
        this.dialogRef.close();
    }

}
