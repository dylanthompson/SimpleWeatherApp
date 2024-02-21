import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-city-nav-menu',
  templateUrl: './city-nav-menu.component.html',
  styleUrl: './city-nav-menu.component.scss'
})
export class CityNavMenuComponent {

  cities: string[]
  selectedCity: string;
  
  constructor(private citiesService: CitiesService) {
    citiesService.availableCitiesChanged.subscribe((cities:string[]) => {
      this.cities = cities;
    })

    citiesService.selectedCityChanged.subscribe((city:string) => {
      this.selectedCity = city;
    })
    
  }

  public setCity(cityName: string) {
    this.citiesService.setSelectedCity(cityName)
  }
}
