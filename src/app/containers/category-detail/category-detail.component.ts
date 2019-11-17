import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, take } from 'rxjs/operators';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
    imagePaths: string[];

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params.pipe(pluck('name'), take(1)).subscribe(name => {
            this.imagePaths = new Array(10).fill(null).map((x, i) => `assets/categories/${name}/${name}-${i + 1}.jpg`);
        });
    }
    back() {
        this.router.navigate(['animals']);
    }
}
