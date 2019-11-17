import { CategoryDetailComponent } from './containers/category-detail/category-detail.component';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './containers/categories/categories.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'animals',
        component: CategoriesComponent,
    },
    {
        path: 'animals/:name',
        component: CategoryDetailComponent,
    },
    { path: '', redirectTo: '/animals', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
