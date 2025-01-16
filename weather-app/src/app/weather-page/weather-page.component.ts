import { Component, OnInit, inject, signal } from '@angular/core';
import { WeatherModel } from '../model/weather.type'; // Ensure this type matches the API response structure
import { WaetherService } from '../services/waether.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  imports: [CommonModule],
  styleUrls: ['./weather-page.component.css'], // Corrected property name to `styleUrls`
})
export class WeatherPageComponent implements OnInit {
  
  weatherData = signal<WeatherModel | null>(null);
  isLoading = true; // Tracks loading state
  dailyTemperatures: { date: string; high: number; low: number }[] = [];
  dayExpanded: boolean[] = []; // Track expanded state for daily cards
  hourExpanded: boolean[] = [];  

  weatherService = inject(WaetherService);

  ngOnInit(): void {
    // Fetch weather data from the service
    this.weatherService.getWeatherAPI().subscribe(
      (data: WeatherModel) => {
        this.weatherData.set(data); // Update signal with the data
        this.initializeHourExpanded(data.hourly.time.length);
        this.calculateDailyTemperatures(data);
        this.isLoading = false; // Turn off loading state
      },
      (error) => {
        console.error('Error fetching weather data:', error); // Log error
        this.isLoading = false; // Ensure loading state is turned off on error
      }
    );
  }
  private initializeHourExpanded(hours: number): void {
    // Initialize the hourExpanded array with `false` for each hour
    this.hourExpanded = Array(hours).fill(false);
  }

  private calculateDailyTemperatures(data: WeatherModel): void {
    const groupedByDate: { [key: string]: number[] } = {};

    // Group temperatures by date
    data.hourly.time.forEach((timestamp, index) => {
      const date = timestamp.split('T')[0]; // Extract the date part
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(data.hourly.temperature_2m[index]);
    });

    // Calculate high and low for each day
    this.dailyTemperatures = Object.keys(groupedByDate).map((date) => {
      const temperatures = groupedByDate[date];
      return {
        date,
        high: Math.max(...temperatures),
        low: Math.min(...temperatures),
      };
    });
  }
}
