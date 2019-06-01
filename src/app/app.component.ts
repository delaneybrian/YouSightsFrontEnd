import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'YouSights';

  constructor(private router: Router) { }

  navigateToAbout() {
    this.router.navigateByUrl('/about');
  }

  navigateToHome() {
    this.router.navigateByUrl('/')
  }
}
