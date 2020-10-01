import { Component, Output, OnInit, AfterViewInit, EventEmitter, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';

import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipPictureUrlDialogComponent } from '../picture-url-dialog/picture-url-dialog.component';
import { AddImageTranslations } from './shared/add-image.translations';


@Component({
    selector: 'pip-add-image',
    templateUrl: 'add-image.component.html',
    styleUrls: ['./add-image.component.scss']
})
export class PipAddImageComponent implements OnInit, AfterViewInit {
    @ViewChild(MatMenuTrigger, { static: true }) public menu: MatMenuTrigger;
    @ViewChild('fileInput', { static: true }) fileInput: any;

    // tslint:disable-next-line:no-output-on-prefix
    @Output() onImageLoad: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef,
        private dialog: MatDialog,
        private translate: TranslateService
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-add-image');

        this.translate.setTranslation('en', AddImageTranslations.en, true);
        this.translate.setTranslation('ru', AddImageTranslations.ru, true);
    }

    ngOnInit() { }

    ngAfterViewInit() {

    }

    public onCameraClick() {
        const dialogRef = this.dialog.open(PipCameraDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (this.onImageLoad) { this.onImageLoad.emit(result); }
        });
    }

    public onPictureUrlClick() {
        const dialogRef = this.dialog.open(PipPictureUrlDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (this.onImageLoad) { this.onImageLoad.emit(result); }
        });
    }

    public onUploadClick(e, fileInput) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (!file) { return; }

        const reader = new FileReader();

        reader.onloadend = (result: any) => {
            if (this.onImageLoad) { this.onImageLoad.emit({
                img: {
                    url: result.target.result,
                    name: file.name,
                    file
                }
            });
            }
            this.fileInput.nativeElement.value = '';
        };
        reader.readAsDataURL(file);
    }
}
