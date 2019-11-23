import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timeElapsed = 0;
  timerStatus = 'not-started';
  constructor(
    private timerService: TimerService
  ) { }

  ngOnInit() {
    // setInterval(() => {
    //   if (this.timeElapsed < 100) {
    //     this.timeElapsed += 1;
    //   }
    // }, 100);
  }

  startTimer(): void {
    console.log('Starting timer');
    this.timerStatus = 'started';
  }

  pauseTimer(): void {
    console.log('Pausing timer');
    this.timerStatus = 'paused';
  }

}
