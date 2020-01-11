import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  blurredIndex = 15;
  gameStarted = false;
  questionAnswered = false;
  randomPosition: number;
  @Input() img: any;
  @Output() answeredResult = new EventEmitter<any>();
  @Input()
  set gamePlaying(value: boolean) {
    if (value) {
      this.startGame();
    }
  }

  constructor() { }

  ngOnInit() {
    this.randomPosition = this.getRandomPosition();
  }

  startGame() {
    this.gameStarted = true;
    setInterval(() => {
      if (this.blurredIndex > 0) {
        this.blurredIndex -= 0.3;
      }
    }, 150);
  }

  answerQuestion(answeredName: string) {
    let blurredIndex = this.blurredIndex;
    blurredIndex = Math.round(blurredIndex * 100) / 10;
    console.log(blurredIndex);

    this.questionAnswered = true;
    this.blurredIndex = 0;
    setTimeout(() => {
      this.answeredResult.emit({ answeredName, blurredIndex });
    }, 3000);
  }

  getClass(correct) {
    if (!this.questionAnswered) {
      return 'white';
    }
    if (correct) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getRandomPosition() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
  }

}
