import { Component, OnInit } from '@angular/core';
import { DropdownItemDto } from '../../models/dropdown-item.dto';
import { EnumHelper } from '../../shared/enum.helper';
import { CategoriesEnum } from '../../models/categories.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
    categories: DropdownItemDto[];

    constructor(private enumHelper: EnumHelper, private router: Router) {
        this.categories = this.enumHelper.getKeyValues(CategoriesEnum, 'CategoriesEnum');
    }
    selectCategory(category: DropdownItemDto) {
        console.log('selected', category);
        this.router.navigate([]);
    }
}
