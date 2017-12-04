import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'picture-edit-example',
	templateUrl: 'picture-edit-example.component.html',
	styleUrls: ['./picture-edit-example.component.scss']
})
export class PictureEditExampleComponent implements OnInit {

    public image: any = null;

    ngOnInit() { }
    
    public onImageLoad(results) {
        this.image = results.img.url;
    }
}