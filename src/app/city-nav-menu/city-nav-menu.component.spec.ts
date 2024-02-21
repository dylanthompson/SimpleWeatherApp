import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNavMenuComponent } from './city-nav-menu.component';

describe('CityNavMenuComponent', () => {
  let component: CityNavMenuComponent;
  let fixture: ComponentFixture<CityNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityNavMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
