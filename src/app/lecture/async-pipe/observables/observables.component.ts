import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  template: `View the console to see the output`
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obsInstance: Observable<string> = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('My first message');
      }, 2000);

      setTimeout(() => {
        observer.next('My second message');
      }, 3000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });

    obsInstance.subscribe({
      next: (message) => console.log(message),
      complete: () => console.log('Observable completed')
    });
  }

}
