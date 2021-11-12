import { Component, Input } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // Tells Angular to create/provide the service
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  /* Bind the LoggingService (logging.service) and AccountsService (accounts.service) components to the value to the property loggingService
  Services should not be instantiated manually, but by using the below process, so Angular is aware
  of how the service intergrates into the web application */
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onSetTo(accountStatus: string) {
    this.accountsService.updateStatus(this.id, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
