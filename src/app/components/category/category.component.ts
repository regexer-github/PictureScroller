import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesEnum } from '../../models/categories.enum';
import { DropdownItemDto } from '../../models/dropdown-item.dto';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
    @Input() category: DropdownItemDto;

    @Output() selected = new EventEmitter();
    imagePath: string;

    ngOnInit(): void {
        this.imagePath = `assets/categories/${this.category.dataValueField}/${this.category.dataValueField}-1.jpg`;
    }
}
