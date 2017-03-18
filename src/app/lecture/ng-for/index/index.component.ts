import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <md-list>
     <md-list-item *ngFor="let topic of topics">{{ topic.title }}</md-list-item>
    </md-list>
  `
})
export class IndexComponent implements OnInit {
  public topics = [
    { id: 1, title: 'Observables' },
    { id: 2, title: 'Dependency Injection' },
    { id: 3, title: 'Behavior Subject' },
    { id: 4, title: 'Replay Subject' },
    { id: 5, title: 'Content Projection' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
