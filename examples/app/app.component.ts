import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { TranslateService } from '@ngx-translate/core';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

export const AppTranslations = {
  en: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.EMPTY_STATES': 'Empty states',
    'EXAMPLES.WITH_SOURCE_FILES': 'With source files',
    'EXAMPLES.ITEM': 'item',
    'EXAMPLES.ITEMS': 'items',
    'EXAMPLES.ITEMS_MORE_THAN_4': 'items'
  },
  ru: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.EMPTY_STATES': 'Пустые состояния',
    'EXAMPLES.WITH_SOURCE_FILES': 'С исходными файлами',
    'EXAMPLES.ITEM': 'изображение',
    'EXAMPLES.ITEMS': 'изображения',
    'EXAMPLES.ITEMS_MORE_THAN_4': 'изображений'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listIndex: number = 0;
  public themes: Theme[];
  public selectedTheme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Pictures';
  public url: string;
  public langs: string[] = [];
  public selectedLang: string = 'en';

  public list: any[] = [
    {
      name: 'Collage', id: 'collage', route: 'collage'
    },
    {
      name: 'Picture', id: 'picture', route: 'picture'
    },
    {
      name: 'Picture Edit', id: 'picture_edit', route: 'picture_edit'
    },
    {
      name: 'Picture List Edit', id: 'picture_list_edit', route: 'picture_list_edit'
    }
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private themeService: PipThemesService,
    private router: Router,
    public media: ObservableMedia,
    private translate: TranslateService
  ) {
    this.selectedTheme = this.themeService.selectedTheme;
    this.themes = this.themeService.themes;

    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);
    this.langs = translate.getLangs();
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);

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

  public changeTheme(theme) {
    this.selectedTheme = theme;
    this.themeService.selectedTheme = theme;
  }

  public changeLanguage(lang) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

}
