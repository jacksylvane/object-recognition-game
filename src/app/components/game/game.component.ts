import { Component, OnInit } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  probability: any = 'N/A';
  correctAnswer: any;
  imageClasified = false;
  showResult = false;
  possibleAnswers = [];
  constructor() { }

  ngOnInit() {
    const img = document.getElementById('img');
    this.clasifyImage(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
      this.correctAnswer = predictions[0];
      this.probability = (predictions[0].probability * 100).toFixed(0);
      this.imageClasified = true;
      predictions.map(prediction => {
        this.possibleAnswers.push({
          name: prediction.className,
          probability: prediction.probability,
          correct: false
        });
      });
    });


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
    console.log('You have selected', answer);
    if (answer === this.correctAnswer.className) {
      this.possibleAnswers = this.possibleAnswers.map(x => {
        return x.name === answer ? { ...x, correct: true } : x;
      });
    }
    this.showResult = true;
    console.log(this.possibleAnswers);

  }
}
