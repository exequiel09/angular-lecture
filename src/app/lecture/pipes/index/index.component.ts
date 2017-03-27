import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `<p>
    {{ accountBalance | currency }}
  </p>
  `
})
export class IndexComponent implements OnInit {
  public accountBalance = 13.1234567;

  constructor() { }

  ngOnInit() {
  }

}
