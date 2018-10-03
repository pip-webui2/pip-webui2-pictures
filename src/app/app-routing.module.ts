import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { UploadFilesExampleComponent } from './upload-files-example/upload-files-example.component';
import { CollageExampleComponent } from './collage-example/collage-example.component';
import { PictureEditExampleComponent } from './picture-edit-example/picture-edit-example.component';
import { PictureExampleComponent } from './picture-example/picture-example.component';
import { PictureListEditExampleComponent } from './picture-list-edit-example/picture-list-edit-example.component';

const appRoutes: Routes = [
    { path: 'picture', component: PictureExampleComponent },
    { path: 'collage', component: CollageExampleComponent },
    { path: 'picture_edit', component: PictureEditExampleComponent },
    { path: 'picture_list_edit', component: PictureListEditExampleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'picture' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
