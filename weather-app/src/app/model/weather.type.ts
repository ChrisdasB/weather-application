export type WeatherModel = {
    latitude: number;
    longitude: number; // Changed from boolean to number
    generationtime_ms: number;
    utc_offset_seconds: number; // Corrected type
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits; // Use a specific type for clarity
    hourly: HourlyData; // Reference a detailed type for `hourly`
  };
  
  type HourlyUnits = {
    time: string;
    temperature_2m: string;
    precipitation_probability: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
  };
  
  type HourlyData = {
    time: string[]; // ISO8601 strings
    temperature_2m: number[]; // °C
    precipitation_probability: number[]; // %
    precipitation: number[]; // mm
    weather_code: number[]; // WMO codes
    wind_speed_10m: number[]; // km/h
  };