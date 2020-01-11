import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {
  // tslint:disable-next-line:max-line-length
  words = ['letter', 'sun', 'lamp', 'phone', 'mouse', 'cat', 'display', 'package', 'robot', 'laptop', 'fruit', 'grass', 'football', 'scoreboard', 'hockey', 'bowl', 'speaker', 'cat', 'watch', 'water', 'plane', 'paper', 'playstation', 'computer', 'glass', 'bottle', 'wallet', 'money', 'cake'];
  constructor() { }

  generateRandomWord(): string {
    const randomWordIndex = Math.floor(Math.random() * this.words.length) + 1;
    return this.words[randomWordIndex];
  }
}
