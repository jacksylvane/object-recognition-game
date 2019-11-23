import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  blurredIndex = 15;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.blurredIndex > 0) {
        this.blurredIndex -= 0.3;
      }
    }, 100);
  }

}
