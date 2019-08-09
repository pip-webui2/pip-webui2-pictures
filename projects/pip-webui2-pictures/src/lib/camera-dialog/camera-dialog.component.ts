import { Component, Inject, Renderer, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';
import { WebcamUtil, WebcamImage } from 'ngx-webcam';

import { CameraDialogTranslations } from './shared/camera-dialog.translations';

@Component({
  selector: 'pip-camera-dilaog',
  templateUrl: 'camera-dialog.component.html',
  styleUrls: ['./camera-dialog.component.scss']
})
export class PipCameraDialogComponent implements OnInit, AfterViewInit {

  private trigger: Subject<void> = new Subject<void>();

  public cameraError = false;
  public showWebcam = true;
  public webcamImage: WebcamImage = null;

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

  ngOnInit() { WebcamUtil.getAvailableVideoInputs(); }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
  }

  public onSuccess(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  public onError(err) { this.cameraError = true; }

  public takeSnapshot() {
    if (this.showWebcam) {
      this.trigger.next();
      this.showWebcam = false;
    } else {
      this.webcamImage = null;
      this.showWebcam = true;
    }
  }

  public onSave() {
    this.dialogRef.close(this.webcamImage);
  }

  public onClose() {
    this.data.img = null;
    this.dialogRef.close();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
