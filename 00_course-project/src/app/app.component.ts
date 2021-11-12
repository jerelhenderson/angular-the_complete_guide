import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';

  // Determine the current display state of the page
  selectedHeaderLink = 'cookingTime';

  onSelected(headerLink: string) {
    this.selectedHeaderLink = headerLink;
  }
}
