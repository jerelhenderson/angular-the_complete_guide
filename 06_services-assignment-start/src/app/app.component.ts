import { Component } from '@angular/core';

import { UsersService } from './shared-services/users.services';

// UsersService is passed down to each child component (but not application-wide)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})

export class AppComponent {

}
