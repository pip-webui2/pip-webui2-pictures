# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Picture controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Images are essential for any application with graphical user interface. Pip.WebUI.Pictures module provides number of different controls to visualize and edit pictures.

## Components

### Picture view 
**Is the simplest control that loads from the server and visualizes a single image**

**Using**

```html
<pip-picture resize="false" class="square-xl rounded" defaultIcon="tag_faces" backgroundColor="#E53935" 
    foregroundColor="#FFFFFF" foregroundColorOpacity="1">
</pip-picture>

<pip-picture resize="false" class="square-xl" backgroundColor="#2196F3" src="./assets/boy.png"></pip-picture>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-view.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-view.png"/>
</a>

### Picture edit 
**Control allows to set a single image and upload it to server**

**Using**

Template:
```html
<pip-picture-edit src="./assets/boy.png" defaultIcon="face" (onImageLoad)="onImageLoad($event)" 
    (onImageDelete)="onImageDelete($event)">
</pip-picture-edit>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-edit.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-edit.png"/>
</a>

### Picture list 
**Control allows to upload a collection of images at once** 

**Using**

Template:
```html
<pip-picture-list-edit [srcs]="sources"></pip-picture-list-edit>
```

Initialized data:
```typescript
sources: string[] = [
    './assets/boy.png',
    './assets/girl2.png',
    './assets/boy2.png',
    './assets/girl.png'
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-list.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-list.png"/>
</a>

### Collage 
**Control visualizes a collection of images as random collage**

**Using**

Template:
```html
<pip-collage [srcs]="sources"></pip-collage>
```

Initialized data:
```typescript
sources: string[] = [
    './assets/boy.png',
    './assets/girl2.png',
    './assets/boy2.png',
    './assets/girl.png'
];
```

**Example on the image (7 pictures)**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/collage.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/collage.png"/>
</a>

### Add image 
**Dialog let user add image from different sources: from file, camera or web link. Uses dialogs that described below**

**Using**

Template:
```html
<pip-add-image (onImageLoad)="onImageLoad($event)"></pip-add-image>
```

Handler:
```typescript
onImageLoad(results) {
    imageSource = results.img.url;
    imageLoadEvent.emit(results.img);
}
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/add-image.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/add-image.png"/>
</a>

## Dialogs

### Camera dialog

**Allows to get image from device's camera**

**Using**

```typescript
import { MatDialog } from '@angular/material';
import { PipCameraDialogComponent } from 'pip-webui2-pictures';

constructor(
        private dialog: MatDialog
    ) {

    }

    onCameraClick() {
        let dialogRef = this.dialog.open(PipCameraDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            
        });
    }
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/camera-dialog.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/camera-dialog.png"/>
</a>

### Picture url dialog

**Allows to get image from picture's url**

**Using**

```typescript
import { MatDialog } from '@angular/material';
import { PipPictureUrlDialogComponent } from 'pip-webui2-pictures';

constructor(
        private dialog: MatDialog
    ) {

    }

    onPictureUrlClick() {
        let dialogRef = this.dialog.open(PipPictureUrlDialogComponent, {
            data: { img: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            
        });
    }
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-url-dialog.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-pictures/raw/master/doc/images/picture-url-dialog.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-pictures --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use."# pip-webui2-pictures" 
