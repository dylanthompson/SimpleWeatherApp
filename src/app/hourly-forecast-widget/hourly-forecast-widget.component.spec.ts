import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastWidgetComponent } from './hourly-forecast-widget.component';

describe('HourlyForecastWidgetComponent', () => {
  let component: HourlyForecastWidgetComponent;
  let fixture: ComponentFixture<HourlyForecastWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyForecastWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlyForecastWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
