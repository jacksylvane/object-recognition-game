import { Component, OnInit } from '@angular/core';
// import * as tf from '@tensorflow/tfjs';

import * as mobilenet from '@tensorflow-models/mobilenet';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  blurredIndex = 0;
  prediction = 'detecting...';
  probability: any = 'N/A';
  constructor() { }

  ngOnInit() {
    const img = document.getElementById('img');
    this.clasifyImage(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
      this.prediction = predictions[0].className;
      this.probability = (predictions[0].probability * 100).toFixed(0);

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


}
