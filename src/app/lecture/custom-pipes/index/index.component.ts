import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <p>{{ text }}</p>
    <p>{{ text | reverse }}</p>
  `
})
export class IndexComponent implements OnInit {
  public text = 'I am a text';

  constructor() { }

  ngOnInit() {
  }

}
