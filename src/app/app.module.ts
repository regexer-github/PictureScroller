import { CategoryDetailComponent } from './containers/category-detail/category-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EnumHelper } from './shared/enum.helper';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { AppRoutingModule } from './app.routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [AppComponent, CategoriesComponent, CategoryDetailComponent, CategoryComponent, ImageCardComponent],
    imports: [
        BrowserModule,

        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        AppRoutingModule,
    ],
    providers: [EnumHelper],
    bootstrap: [AppComponent],
})
export class AppModule {}
