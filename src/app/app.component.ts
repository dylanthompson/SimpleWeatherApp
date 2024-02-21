import { Component } from '@angular/core';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-weather-app';


  constructor(private citiesService:CitiesService) {

  }

  addCity(city: string) {
    this.citiesService.pushAvailableCities(city);
  }
}
