import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /* Tells Angular to create/provide the service
  AccountsService isn't called here, because it would override AccountsService called from the app.component */
  // providers: [LoggingService]
})
export class NewAccountComponent {
  /* Bind the LoggingService (logging.service) and AccountsService (accounts.service) components to the value to the property loggingService
  Services should not be instantiated manually, but by using the below process, so Angular is aware
  of how the service intergrates into the web application */
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
      // Cross component communication through accounts.service
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New status: ' + status)
      )
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
