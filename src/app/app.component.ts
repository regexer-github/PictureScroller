import { Component } from '@angular/core';
import { EnumHelper } from './shared/enum.helper';
import { CategoriesEnum } from './models/categories.enum';
import { DropdownItemDto } from './models/dropdown-item.dto';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    categories: DropdownItemDto[];

    constructor(private enumHelper: EnumHelper) {
        this.categories = this.enumHelper.getKeyValues(CategoriesEnum, 'CategoriesEnum');
    }
    selectCategory(category: DropdownItemDto) {
        console.log('selected', category);
    }
}
