import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeIngridientsPage } from './recipe-ingridients.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeIngridientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeIngridientsPageRoutingModule {}
