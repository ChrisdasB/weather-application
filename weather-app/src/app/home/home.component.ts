import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal("Chris");
  
  keyDownHandler(event: KeyboardEvent) {
    console.log(`${event.key} has been pressed!`);
  }
}
