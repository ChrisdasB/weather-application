import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { WeatherModel } from '../model/weather.type';

@Injectable({
  providedIn: 'root'
})
export class WaetherService {

  http = inject(HttpClient);

  getWeatherAPI() {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=-22.5562&longitude=17.0759&hourly=temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m&timezone=auto`;
      return this.http.get<WeatherModel>(url);
    }
  
}
