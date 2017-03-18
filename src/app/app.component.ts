import { Component, HostListener, OnInit, Renderer, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menuButtonVisible = false;
  public sideNavMode = 'side';
  public sideNavOpen = true;
  public sideNavDisableClose = true;

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    // trigger the resize event on the window
    this.renderer.invokeElementMethod(window, 'dispatchEvent', [
      new Event('resize')
    ]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(evt: Event) {
    if ((evt.target as any).innerWidth < 500) {
      this.menuButtonVisible = true;
      this.sideNavMode = 'over';
      this.sideNavOpen = false;
      this.sideNavDisableClose = false;
      this.sidenav.close();
    } else {
      this.menuButtonVisible = false;
      this.sideNavMode = 'side';
      this.sideNavOpen = true;
      this.sideNavDisableClose = true;
      this.sidenav.open();
    }
  }

}
