import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { WeatherService } from '../weather.service';

export class CurrentWeatherReportViewModel {
  temperature: number;
  logo: string;
  time: Date;
}


@Component({
  selector: 'app-current-weather-widget',
  templateUrl: './current-weather-widget.component.html',
  styleUrl: './current-weather-widget.component.scss'
})
export class CurrentWeatherWidgetComponent {
  cityName: string = null;
  weatherReport: CurrentWeatherReportViewModel;
  constructor(private citiesService: CitiesService, private weatherService: WeatherService) {
    citiesService.selectedCityChanged.subscribe((cityName:string) => {
      this.cityName = cityName;
      this.weatherReport = null;
      this.fetchCurrentWeather();
    })
  }

  ngAfterViewInit(): void {
      this.fetchCurrentWeather();
  }

  fetchCurrentWeather() {
    this.weatherService.getCurrentWeather(this.cityName).subscribe(curWeatherResponse => {
      this.weatherReport = {
        temperature: curWeatherResponse.main.temp,
        logo: this.weatherService.getLogoUrl(curWeatherResponse.weather?.[0]?.icon),
        time: new Date()
      }
    })
  }
}
