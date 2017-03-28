import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  template: `View the console to see the output`
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('setTimeout() executed');
      }, 5000);
    });

    timeoutPromise.then((message) => console.log(message));

    console.log('This will execute before the timeout has been completed.');
  }

}
