import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "app/shared/data.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  data;
  dataObservable;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataObservable = this.dataService
                              .get('/assets/data/account-activities.json')
                              .map(resp => this.data = resp.json());
    this.dataObservable.subscribe();                    
  }

  ngOnDestroy() {
    this.dataObservable.unsubscribe();
  }
  

}
