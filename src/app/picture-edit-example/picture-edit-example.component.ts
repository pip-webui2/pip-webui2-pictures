import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-edit-example',
  templateUrl: './picture-edit-example.component.html',
  styleUrls: ['./picture-edit-example.component.scss']
})
export class PictureEditExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onImageLoad(results) {
    console.log('Image loaded: ', results);
  }

  public onImageDelete(results) {
    console.log('Image deleted!');
  }

}
