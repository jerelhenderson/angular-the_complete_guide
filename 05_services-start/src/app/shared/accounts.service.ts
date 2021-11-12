import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// Service metadata letting Angular know a service where service data is injected
@Injectable()

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  /* If a service is injected into something (a component, another service), it needs to have metadata (@Injectable) attached
  Components, directives contain metadata - Services don't */
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}