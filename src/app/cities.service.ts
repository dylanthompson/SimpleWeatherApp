import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  _selectedCity = new BehaviorSubject<string>("Los Angeles");
  _availableCities = new BehaviorSubject<string[]>(["Rio De Janeiro", "Beijing", "Los Angeles"]);
  
  public get selectedCityChanged() {
    return this._selectedCity.asObservable();
  }

  public setSelectedCity(cityName: string) {
    this._selectedCity.next(cityName)
  }

  public get availableCitiesChanged() {
    return this._availableCities.asObservable();
  }

  public pushAvailableCities(cityName: string) {
    this._availableCities.next([...this._availableCities.value, cityName] );
  }

  constructor() { }
}
