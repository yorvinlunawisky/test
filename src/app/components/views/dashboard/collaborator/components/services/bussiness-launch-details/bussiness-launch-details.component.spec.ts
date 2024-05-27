import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessLaunchDetailsComponent } from './bussiness-launch-details.component';

describe('BussinessLaunchDetailsComponent', () => {
  let component: BussinessLaunchDetailsComponent;
  let fixture: ComponentFixture<BussinessLaunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessLaunchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BussinessLaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
