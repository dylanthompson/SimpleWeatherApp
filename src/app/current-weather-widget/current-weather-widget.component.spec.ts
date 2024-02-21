import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherWidgetComponent } from './current-weather-widget.component';

describe('CurrentWeatherWidgetComponent', () => {
  let component: CurrentWeatherWidgetComponent;
  let fixture: ComponentFixture<CurrentWeatherWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
