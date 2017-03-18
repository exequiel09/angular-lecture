import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `{{ value }}`
})
export class IndexComponent implements OnInit {
  value = `I'm an interpolated value`;

  constructor() { }

  ngOnInit() { }

}
