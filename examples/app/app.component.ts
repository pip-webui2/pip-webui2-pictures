import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listIndex: number = 0;
  public themes: Theme[];
  public theme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Pictures';
  public url: string;

  public list: any[] = [
    {
      name: 'Collage', id: 'collage', route: 'collage'
    },
    {
      name: 'Picture', id: 'picture', route: 'picture'
    },
    {
      name: 'Picture Edit', id: 'picture_edit', route: 'picture_edit'
    }
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private service: PipThemesService,
    private router: Router,
    public media: ObservableMedia
  ) {
    this.themes = this.service.themes;
    this.theme = this.service.selectedTheme;

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs' ? true : false;
      this.mode = change && change.mqAlias == 'xs' ? null : 'side';
    })

    router.events.subscribe((url: any) => {

      if (url.url && url.url != this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
          return "/" + item.route == this.url;
        })
      }
    });

  }

  public ngOnInit() { }

  public ngAfterViewInit() { }

  public onListItemIndexChanged(index: number) {

    this.listIndex = index;
    this.sidenav.close();
  }

  public changeTheme() {
    console.log(this.theme);
    this.service.selectedTheme = this.theme;

  }

}
