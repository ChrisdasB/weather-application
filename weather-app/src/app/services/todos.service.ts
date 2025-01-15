import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }

  constructor() {  }
}
/* https://open-meteo.com/en/docs#latitude=-22.5562&longitude=17.0759&current=&minutely_15=&hourly=temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m&daily=&timezone=auto&models= */