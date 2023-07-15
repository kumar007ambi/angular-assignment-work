import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();//another property to store event
  interval:any;//property 
  number = 0;
  constructor() { }
  
  increment() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number + 1);
      this.number++;
    }, 1000)
  }
  reset() {
    clearInterval(this.interval);
  }
}
