import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <app-clickable (action)="onAction($event)"></app-clickable>
    <span>{{ output }}</span>
  `
})
export class IndexComponent implements OnInit {
  public output = '';

  constructor() { }

  ngOnInit() {
  }

  onAction(data) {
      this.output += data + ' ';
  }

}
