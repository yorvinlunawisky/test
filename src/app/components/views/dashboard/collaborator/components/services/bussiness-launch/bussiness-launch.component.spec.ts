import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessLaunchComponent } from './bussiness-launch.component';

describe('BussinessLaunchComponent', () => {
  let component: BussinessLaunchComponent;
  let fixture: ComponentFixture<BussinessLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessLaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BussinessLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
