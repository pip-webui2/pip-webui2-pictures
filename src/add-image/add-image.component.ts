import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter, Renderer, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';

@Component({
    selector: 'pip-add-image',
    templateUrl: 'add-image.component.html',
    styleUrls: ['./add-image.component.scss']
})
export class PipAddImageComponent implements OnInit, AfterViewInit {
    ngOnInit() { }

    @Output() onImageLoad: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private dialog: MatDialog
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-add-image', true);
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
}