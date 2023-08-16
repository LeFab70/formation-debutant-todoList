import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
})
export class NotFoundPageComponent {
  image404Url: string = '../../assets/erreur-404-JDM-scaled.jpeg';
  text404: string = 'image du 404 page not found';
  constructor(private router: Router) {}

  backToHome() {
    this.router.navigateByUrl('');
  }
}
