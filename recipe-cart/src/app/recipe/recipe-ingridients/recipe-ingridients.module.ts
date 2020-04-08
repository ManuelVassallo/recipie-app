import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeIngridientsPageRoutingModule } from './recipe-ingridients-routing.module';

import { RecipeIngridientsPage } from './recipe-ingridients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeIngridientsPageRoutingModule
  ],
  declarations: [RecipeIngridientsPage]
})
export class RecipeIngridientsPageModule {}
