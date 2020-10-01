import { Component, Input, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

import { collageSchemes } from '../shared/picture-utils';

@Component({
    selector: 'pip-collage',
    templateUrl: 'collage.component.html',
    styleUrls: ['./collage.component.scss']
})
export class PipCollageComponent implements OnInit, AfterViewInit {
    private _sources: string[] = [];
    private _containerHeight: number;
    private _tables: any[] = [];
    private _maxPictureInCollage: number = collageSchemes.length;
    @Input() public gutterSize = 8;

    @Input() set srcs(sources: string[]) {
        this._sources = sources;
        this._containerHeight = this.elRef.nativeElement.offsetHeight;
        this.calculateTables();
    }

    ngOnInit() {
        this._containerHeight = this.elRef.nativeElement.offsetHeight;
    }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-collage');
    }

    ngAfterViewInit() {

    }

    private calculateTables() {
        this._tables = [];
        if (this._sources.length === 0) { return; }

        const fullMaxCollages = Math.floor(this._sources.length / this._maxPictureInCollage);

        if (fullMaxCollages === 0) {
            this.fillTable(0, this._sources.length);
        } else {
            const rest = this._sources.length % this._maxPictureInCollage;

            for (let i = 0; i < fullMaxCollages; i++) {
                this.fillTable(i * this._maxPictureInCollage, (i * this._maxPictureInCollage) + this._maxPictureInCollage);
            }
            if (rest > 0) {
                this.fillTable(fullMaxCollages * this._maxPictureInCollage, (fullMaxCollages * this._maxPictureInCollage) + rest);
            }
        }
    }

    private fillTable(sourcesStart: number, sourcesEnd: number) {
        const sources = this._sources.slice(sourcesStart, sourcesEnd);
        const schema = this.getSchemeByNumber(sources.length - 1);

        this._tables.push({
            cols: schema.cols,
            rowHeight: this._containerHeight / schema.rowHeightDivider + 'px',
            tiles: this.filTiles(sources, schema.pictures)
        });
    }

    private filTiles(sources: any[], schemaPictures: any[]) {
        const tiles: any[] = [];
        for (let i = 0; i < sources.length; i++) {
            tiles.push({
                colspan: schemaPictures[i].colspan,
                rowspan: schemaPictures[i].rowspan,
                src: sources[i]
            });
        }

        return tiles;
    }

    private getSchemeByNumber(count: number) {
        const variants = collageSchemes[count];
        const variantsCount = variants.length;
        const randomIndex = Math.round(this.random(0, variantsCount - 1));

        return variants[randomIndex];
    }

    private random(min, max) {
        return Math.random() * (max - min) + min;
    }

    public get tables() {
        return this._tables;
    }
}
