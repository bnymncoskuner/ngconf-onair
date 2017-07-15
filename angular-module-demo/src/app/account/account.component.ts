import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

interface Account {
  title: string;
  balance: number;
  currency: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  myAccount: Account;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('/assets/data/account.json').subscribe(resp => this.myAccount = resp);
  }

}
