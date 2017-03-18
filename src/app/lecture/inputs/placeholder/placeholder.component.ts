import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: `
    <span>{{ text }}</span>
  `
})
export class PlaceholderComponent implements OnInit {
  @Input('text') text: string;

  constructor() { }

  ngOnInit() {
  }

}
