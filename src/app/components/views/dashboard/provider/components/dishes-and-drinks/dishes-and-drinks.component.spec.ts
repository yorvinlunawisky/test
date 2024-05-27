import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesAndDrinksComponent } from './dishes-and-drinks.component';

describe('DishesAndDrinksComponent', () => {
  let component: DishesAndDrinksComponent;
  let fixture: ComponentFixture<DishesAndDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesAndDrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishesAndDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
