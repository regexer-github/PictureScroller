import { CategoryDetailComponent } from './containers/category-detail/category-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EnumHelper } from './shared/enum.helper';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { CategoriesComponent } from './containers/categories/categories.component';

@NgModule({
    declarations: [AppComponent, CategoriesComponent, CategoryDetailComponent, CategoryComponent, ImageCardComponent],
    imports: [BrowserModule],
    providers: [EnumHelper],
    bootstrap: [AppComponent],
})
export class AppModule {}
