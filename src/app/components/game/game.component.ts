import { Component, OnInit } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { RandomWordService } from '../../services/random-word.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  probability: any = 'N/A';
  imagesClasified = false;
  gameOver = false;
  gamePlaying = false;
  score = 0;
  imagesDetected = 0;
  imagesCorrectlyGuessed = 0;

  images = [
    {
      name: 'kebab',
      possibleAnswers: [],
      showResult: false,
      guessed: false,
      shown: true
    },
    {
      name: 'dogs',
      possibleAnswers: [],
      showResult: false,
      guessed: false,
      shown: false
    },
    {
      name: 'house',
      possibleAnswers: [],
      showResult: false,
      guessed: false,
      shown: false
    },
    {
      name: 'car',
      possibleAnswers: [],
      showResult: false,
      guessed: false,
      shown: false
    }
  ];
  constructor(private randomWordService: RandomWordService) { }

  ngOnInit() {
    setTimeout(() => {
      this.detectImages();
    }, 200);


    // setInterval(() => {
    //   if (this.blurredIndex > 0) {
    //     this.blurredIndex -= 0.1;
    //   }
    // }, 100);
  }

  async clasifyImage(img) {
    // Load the model.
    const model = await mobilenet.load();

    // Classify the image.
    return await model.classify(img);
  }

  selectAnswer(answer) {
    console.log('You have selected', answer.answeredName);
    const selected = this.images.filter(x => x.shown)[0];
    if (answer.answeredName === selected.possibleAnswers[0].name) {
      this.score += answer.blurredIndex;
      this.imagesCorrectlyGuessed += 1;
    } else {
      this.score -= answer.blurredIndex;
    }
    console.log(this.score);

    const indexOfCurrent = this.images.indexOf(selected);
    this.images = this.images.map(x => {
      if (x.name === selected.name) {
        return { ...selected, shown: false, guessed: true };
      } else if (indexOfCurrent + 1 !== this.images.length && this.images.indexOf(x) === indexOfCurrent + 1) {
        return { ...x, shown: true };

      } else {
        return x;
      }
    });
    if (indexOfCurrent + 1 === this.images.length) {
      this.finishGame();
    }
    console.log(this.images);

  }

  startGame() {
    this.gamePlaying = true;
    // this.probability = (predictions[0].probability * 100).toFixed(0);
  }

  finishGame() {
    console.log('Game over', this.score);
    this.gameOver = true;

  }

  detectImages() {
    this.images.map(async image => {
      const img = document.getElementById(image.name);
      // console.log(img, image);

      const predictions = await this.clasifyImage(img);
      console.log(predictions);
      const AIword = predictions[0].className;
      image.possibleAnswers = [{
        name: AIword.split(',')[0],
        probability: predictions[0].probability,
        correct: true
      },
      {
        name: this.randomWordService.generateRandomWord(),
        correct: false,
      },
      {
        name: this.randomWordService.generateRandomWord(),
        correct: false,
      }];
      this.images = this.images.map(x => {
        if (x.name === image.name) {
          return image;
        } else {
          return x;
        }
      });
      this.imagesDetected += 1;
      if (this.imagesDetected === this.images.length) {
        this.imagesClasified = true;
        console.log('Images detected, game can start');
      }

    });
    console.log(this.images);

    console.log(this.imagesClasified);

  }
}
