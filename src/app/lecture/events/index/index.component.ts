import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <button type="button" md-raised-button color="primary" class="mat-raised-button" (click)="randomize()">
      Generate Random Characters
    </button>
    <span>{{ randomString }}</span>
  `
})
export class IndexComponent implements OnInit {
  public randomString: string;

  constructor() { }

  ngOnInit() {
    this.randomize();
  }

  randomize() {
    this.randomString = Math.random().toString(36).substring(7);
  }

}
