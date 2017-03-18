import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <button type="button" md-raised-button color="primary" class="mat-raised-button" (click)="onClick()">
      {{ label }}
    </button>
    <span *ngIf="visible">Magic Text</span>
  `
})
export class IndexComponent implements OnInit {
  public visible = false;
  public label = 'Show magic text';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.visible === false) {
      this.visible = true;
      this.label = 'Hide magic text';
    } else {
      this.visible = false;
      this.label = 'Show magic text';
    }
  }

}
