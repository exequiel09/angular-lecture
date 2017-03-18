import { Component, HostListener, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MdSidenav) sidenav: MdSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(evt: Event) {
    console.log(evt);
    if ((evt.target as any).innerWidth < 500) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

}
