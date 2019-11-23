import { Injectable } from '@angular/core';
import { Observable, timer, of, interval, fromEvent, merge, combineLatest } from 'rxjs';
import { switchMap, switchMapTo, takeWhile, finalize, combineAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // timeElapsed$: Observable<number>;

  constructor() {
  }
  startTimer(): void {
    // console.log(1);
    console.log('%c' + 'Timer initiated', 'font-weight: bold; color: #fccd56');

    // this.timeElapsed$ = this.timeElapsed$.pipe(switchMap(() => timer(1000, 2000)));


  }
}
