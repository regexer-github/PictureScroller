import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, take } from 'rxjs/operators';
import { Howl } from 'howler';
@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
    imagePaths: string[];
    animal$: Observable<string>;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.animal$ = this.route.params.pipe(pluck('name'), take(1));
        this.animal$.subscribe(name => {
            this.imagePaths = new Array(10).fill(null).map((x, i) => `assets/categories/${name}/${name}-${i + 1}.jpg`);
        });
    }
    back() {
        this.router.navigate(['animals']);
    }
    playSound() {
        this.animal$.subscribe(animal => this.playAnimalSound(animal));
    }
    playAnimalSound(animal: string) {
        const audio = new Howl({ src: [`../../../assets/audio/${animal}.wav`] });
        // audio.src = `../../../assets/audio/${animal}.wav`;
        // audio.load();
        audio.play();
    }
}
