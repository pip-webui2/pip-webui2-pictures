import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { PipAddImageComponent } from './add-image.component';
import { PipCameraDialogModule } from '../camera-dialog/camera-dialog.module';
import { PipPictureUrlDialogModule } from '../picture-url-dialog/picture-url-dialog.module';

describe('a pip-add-image component', () => {
    let component: PipAddImageComponent;
    let fixture: ComponentFixture<PipAddImageComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipAddImageComponent
            ],
            imports: [
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
                MatDialogModule,

                TranslateModule.forRoot(),

                PipCameraDialogModule,
                PipPictureUrlDialogModule
            ],
        });
        fixture = TestBed.createComponent(PipAddImageComponent);
        component = fixture.componentInstance;
    });

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
