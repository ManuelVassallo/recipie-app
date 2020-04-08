import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeIngridientsPage } from './recipe-ingridients.page';

describe('RecipeIngridientsPage', () => {
  let component: RecipeIngridientsPage;
  let fixture: ComponentFixture<RecipeIngridientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngridientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeIngridientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
