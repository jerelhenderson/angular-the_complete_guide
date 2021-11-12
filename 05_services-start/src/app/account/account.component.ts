import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // Tells Angular to create/provide the service
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

    /* Bind the LoggingService component (logging.service) to the value to the property loggingService
  Services should not be instantiated manually, but by using the below process, so Angular is aware
  of how the service intergrates into the web application */
  constructor(private loggingService: LoggingService) {}

  onSetTo(accountStatus: string) {
    this.statusChanged.emit({id: this.id, newStatus: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }
}
