import { Component, OnInit } from '@angular/core';

import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})

export class AppComponent implements OnInit {
  // Declare accounts[]
  accounts: {name: string, status: string}[] = [];

    // Bind the AccountsService component (accounts.service) to the value to the property accountsService
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    // Accesses the accounts array from accounts.service component
    this.accounts = this.accountsService.accounts;
  }
}
