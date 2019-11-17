import { Observable } from 'rxjs/Observable';
import { pluck } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
    name$: Observable<string>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.name$ = this.route.params.pipe(pluck('name'));
    }
}
