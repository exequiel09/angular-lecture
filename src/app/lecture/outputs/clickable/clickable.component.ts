import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clickable',
  template: `
    <button type="button" md-raised-button color="primary" class="mat-raised-button" (click)="action.emit(text)">
      click
    </button>
    <input type="text" [value]="text" (change)="changeText($event)">
  `
})
export class ClickableComponent implements OnInit {
  public text = '';

  @Output() action = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeText(event) {
    this.text = event.target.value;
  }

}
