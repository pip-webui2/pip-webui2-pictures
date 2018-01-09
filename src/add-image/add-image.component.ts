import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipPictureUrlDialogComponent } from '../picture-url-dialog/picture-url-dialog.component';
import { MatMenuTrigger } from '@angular/material'
import { AddImageTranslations } from './shared/add-image.translations';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'pip-add-image',
    templateUrl: 'add-image.component.html',
    styleUrls: ['./add-image.component.scss']
})
export class PipAddImageComponent implements OnInit, AfterViewInit {
    ngOnInit() { }
    @ViewChild(MatMenuTrigger) public menu: MatMenuTrigger;
    @ViewChild('fileInput') fileInput: any;

    @Output() onImageLoad: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private dialog: MatDialog,
        private translate: TranslateService
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-add-image', true);

        this.translate.setTranslation('en', AddImageTranslations.en, true);
        this.translate.setTranslation('ru', AddImageTranslations.ru, true);
    }

    ngAfterViewInit() {

    }

    public onCameraClick() {
        let dialogRef = this.dialog.open(PipCameraDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (this.onImageLoad) this.onImageLoad.emit(result);
        });
    }

    public onPictureUrlClick() {
        let dialogRef = this.dialog.open(PipPictureUrlDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (this.onImageLoad) this.onImageLoad.emit(result);
        });
    }

    public onUploadClick(e, fileInput) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (!file) return;

        let reader = new FileReader();

        reader.onloadend = (result: any) => {
            if (this.onImageLoad) this.onImageLoad.emit({
                img: {
                    url: result.target.result,
                    name: file.name
                }
            });
            this.fileInput.nativeElement.value = "";
        }
        reader.readAsDataURL(file);
    }
}