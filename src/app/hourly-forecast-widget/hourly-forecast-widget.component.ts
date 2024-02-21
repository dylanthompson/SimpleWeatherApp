import { AfterViewInit, Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { HourlyWeatherApiResponse, WeatherService } from '../weather.service';

export class HourlyWeatherReportViewModel {
  temperature: number;
  logo: string;
  time: Date;
}

@Component({
  selector: 'app-hourly-forecast-widget',
  templateUrl: './hourly-forecast-widget.component.html',
  styleUrl: './hourly-forecast-widget.component.scss'
})
export class HourlyForecastWidgetComponent implements AfterViewInit {
  cityName: string = null;
  weatherReport: HourlyWeatherReportViewModel[];
  constructor(private citiesService: CitiesService, private weatherService: WeatherService) {
    citiesService.selectedCityChanged.subscribe((cityName:string) => {
      this.cityName = cityName;
      this.weatherReport = [];
      this.fetchWeatherReport();
    })
  }

  ngAfterViewInit(): void {
      this.fetchWeatherReport();
  }

  fetchWeatherReport() {
    this.weatherService.getHourlyWeatherForecast(this.cityName).subscribe(hourlyReponse => {
      this.weatherReport = hourlyReponse.list.map(response => {
        return {
          temperature: response.main.temp,
          logo: this.weatherService.getLogoUrl(response.weather?.[0]?.icon),
          time: new Date(response.dt_txt),
        }
      }).slice(0, 8);
    })
  }
}
