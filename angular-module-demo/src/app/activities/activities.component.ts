import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.sass']
})
export class ActivitiesComponent implements OnInit {

  data = [];
  years: SelectItem[] = [];
  selectedYear: string;

  constructor(private dataService: DataService) {
    this.years.push({label : '2017', value : 2017});
    this.years.push({label : '2016', value : 2016});
    this.years.push({label : '2015', value : 2015});
    this.years.push({label : '2014', value : 2014});
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.get('/assets/data/account-activities.json')
                    .map(resp => this.data = this.data.concat(resp)).subscribe();
  }

}
