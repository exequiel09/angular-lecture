import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <app-placeholder text="I am a text"></app-placeholder>
  `
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
