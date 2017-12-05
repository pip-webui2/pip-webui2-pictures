import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'picture-list-edit-example',
	templateUrl: 'picture-list-edit-example.component.html',
	styleUrls: ['./picture-list-edit-example.component.scss']
})
export class PictureListEditExampleComponent implements OnInit {

    public sources: string[] = [
        './assets/boy.png',
        './assets/girl2.png',
        './assets/boy2.png',
        './assets/girl.png',
        'https://i.pinimg.com/736x/da/af/73/daaf73960eb5a21d6bca748195f12052--lion-photography-lion-kings.jpg'
    ];

    ngOnInit() { }
    
    public onImageLoad(results) {
        console.log('Image loaded: ', results);
    }

    public onImageDelete(results) {
        console.log('Image deleted!');
    }
}