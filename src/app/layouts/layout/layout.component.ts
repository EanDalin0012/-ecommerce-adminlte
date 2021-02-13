import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

@HostListener("window: resize", ["$event"])

export class LayoutComponent implements OnInit {

  public innerHeight: any;

  getScreenHeight() {
    this.innerHeight = window.innerHeight + "px";
  }

  constructor(private ngZone: NgZone, private router: Router) {
    window.onresize = (e:any) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + "px";
      });
    };
    this.getScreenHeight();
  }

  ngOnInit() {
    // this.router.navigateByUrl("/dashboard/admin");
  }

  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + "px";
  }

}
