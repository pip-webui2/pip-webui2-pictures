import { Component, Inject, Renderer, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WebCamComponent } from 'ack-angular-webcam';
import { TranslateService } from '@ngx-translate/core';

import { CameraDialogTranslations } from './shared/camera-dialog.translations';
/**
 * @title Dialog Overview
 */

@Component({
  selector: 'pip-camera-dilaog',
  templateUrl: 'camera-dialog.component.html',
  styleUrls: ['./camera-dialog.component.scss']
})
export class PipCameraDialogComponent implements AfterViewInit {

  public webcam: WebCamComponent;
  public photoDone = false;

  public options = {
    audio: false,
    video: true,
    width: 500,
    height: 375,
    cameraType: 'front'
  };

  constructor(
    public dialogRef: MatDialogRef<PipCameraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer,
    private elRef: ElementRef,
    private translate: TranslateService
  ) {
    this.translate.setTranslation('en', CameraDialogTranslations.en, true);
    this.translate.setTranslation('ru', CameraDialogTranslations.ru, true);
  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
  }

  public onSuccess(stream: MediaStream) { }
  public onError(err) { }

  public onCapture() {
    const canvas = this.elRef.nativeElement.getElementsByTagName('canvas')[0];

    if (this.photoDone) {
      this.photoDone = false;
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    } else {
      const video = this.elRef.nativeElement.getElementsByTagName('video')[0];
      if (video && canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        this.photoDone = true;
      }
    }
  }

  public onSave() {
    const canvas = this.elRef.nativeElement.getElementsByTagName('canvas')[0];

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const size = { width: canvas.width, height: canvas.height };
      const w = size.width;
      const h = size.height;
      const imgData = ctx.getImageData(0, 0, w, h);
      const externData = {
        imgData: imgData,
        url: canvas.toDataURL(imgData),
        base64: canvas.toDataURL(imgData),
        pos: 0
      };

      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      this.data.img = externData;
      this.dialogRef.close(this.data);
    }
  }

  public onClose() {
    this.data.img = null;
    this.dialogRef.close();
  }

}
