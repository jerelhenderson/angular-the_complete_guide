import { Component } from '@angular/core';

import { CounterService } from './shared-services/counter.service';
import { UsersService } from './shared-services/users.services';

// UsersService is passed down to each child component (but not application-wide)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})

export class AppComponent {
  constructor(private usersService: UsersService) {};
}
