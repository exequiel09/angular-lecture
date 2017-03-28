import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-index',
  template: `
    <p>{{ asyncVar1 | async }}</p>
    <p>{{ asyncVar2 | async }}</p>
    <p>{{ asyncVar3 | async }}</p>
  `
})
export class IndexComponent implements OnInit {
  public asyncVar1: Promise<string>;
  public asyncVar2: Observable<string>;
  public asyncVar3: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.asyncVar1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('I a am a resolved value of promise!');
      }, 3000);
    });

    this.asyncVar2 = Observable
      .of('I am a value from observable')
      .delayWhen(() => Observable.timer(5000))
      ;

    // emit values 0-n every n seconds
    this.asyncVar3 = Observable.interval(1000);
  }

}
