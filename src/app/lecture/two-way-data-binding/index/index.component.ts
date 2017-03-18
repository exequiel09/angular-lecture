import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <app-child [(value)]="parentValue"></app-child>
    <div>Parent Value: {{ parentValue }}</div>
  `
})
export class IndexComponent implements OnInit {
  public parentValue = 'two way binding';

  constructor() { }

  ngOnInit() {
  }

}
