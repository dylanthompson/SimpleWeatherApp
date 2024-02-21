import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay, pipe } from 'rxjs';


export interface HourlyWeatherApiResponse {
  list: {
    main: MainWeatherData,
    weather: WeatherData[]
    dt_txt: string
  } []
}

export interface CurrentWeatherApiReponse {
  weather: WeatherData[]
  main: MainWeatherData;
}

export interface WeatherData {
  main: string
  description: string
  icon: string
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  pending = {};
  cache = {};

  current:Observable<HourlyWeatherApiResponse> = null;
  private apiKey = "ac551d53466af63b444e900d75c0a5fa";

  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    
  }

  public getCurrentWeather(cityName: string): Observable<CurrentWeatherApiReponse> {
    return this.httpClient.get<CurrentWeatherApiReponse>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=imperial`)
  }

  public getHourlyWeatherForecast(cityName: string): Observable<HourlyWeatherApiResponse> {
    return this.httpClient.get<HourlyWeatherApiResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.apiKey}&units=imperial`)
  }

  public getLogoUrl(logoCode: string): string {
    return `https://openweathermap.org/img/wn/${logoCode}@2x.png`;
  }

  private getTestData(): Observable<HourlyWeatherApiResponse> {
    return of({
      "cod": "200",
      "message": 0,
      "cnt": 96,
      "list": [
        {
          "dt": 1661875200,
          "main": {
            "temp": 296.34,
            "feels_like": 296.02,
            "temp_min": 296.34,
            "temp_max": 298.24,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 933,
            "humidity": 50,
            "temp_kf": -1.9
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "dt_txt": "2022-08-30 16:00:00"
        },
        {
          "dt": 1661878800,
          "main": {
            "temp": 296.31,
            "feels_like": 296.07,
            "temp_min": 296.2,
            "temp_max": 296.31,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 932,
            "humidity": 53,
            "temp_kf": 0.11
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "dt_txt": "2022-08-30 17:00:00"
        },
        {
          "dt": 1661882400,
          "main": {
            "temp": 294.94,
            "feels_like": 294.74,
            "temp_min": 292.84,
            "temp_max": 294.94,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 931,
            "humidity": 60,
            "temp_kf": 2.1
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
        
          "dt_txt": "2022-08-30 18:00:00"
        },
          
        {
          "dt": 1662217200,
          "main": {
            "temp": 294.14,
            "feels_like": 293.99,
            "temp_min": 294.14,
            "temp_max": 294.14,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 931,
            "humidity": 65,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "dt_txt": "2022-09-03 15:00:00"
        }
      ],
      "city": {
        "id": 3163858,
        "name": "Zocca",
        "coord": {
          "lat": 44.34,
          "lon": 10.99
        },
        "country": "IT",
        "population": 4593,
        "timezone": 7200,
        "sunrise": 1661834187,
        "sunset": 1661882248
      }
    }).pipe(delay(10200))
  }
  
}

