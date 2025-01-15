import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterValue = signal(0);
  increaseCounter(){
    this.counterValue.update((val) => val + 1);
  }

  decreaseCounter(){
    this.counterValue.update((val) => val - 1);
  }

  resetCounter() {
    this.counterValue.update((val) => 0);
  }

}
