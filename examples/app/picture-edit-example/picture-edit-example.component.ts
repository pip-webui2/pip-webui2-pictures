import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'picture-edit-example',
	templateUrl: 'picture-edit-example.component.html',
	styleUrls: ['./picture-edit-example.component.scss']
})
export class PictureEditExampleComponent implements OnInit {

    ngOnInit() { }
    
    public onImageLoad(results) {
        console.log('Image loaded: ', results);
    }

    public onImageDelete(results) {
        console.log('Image deleted!');
    }
}