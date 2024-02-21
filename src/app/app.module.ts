import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityNavMenuComponent } from './city-nav-menu/city-nav-menu.component';
import { HourlyForecastWidgetComponent } from './hourly-forecast-widget/hourly-forecast-widget.component';
import { CurrentWeatherWidgetComponent } from './current-weather-widget/current-weather-widget.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CityNavMenuComponent,
    HourlyForecastWidgetComponent,
    CurrentWeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
