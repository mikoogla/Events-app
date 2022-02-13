import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  constructor(private dataService: DataService) {
   }

   getName() {
    return this.dataService.mockupUser.name;
   }

   getLastname() {
     return this.dataService.mockupUser.lastname;
   }

   getAddress() {
    return this.dataService.mockupUser.road + ", " + this.dataService.mockupUser.zipcode + " " + this.dataService.mockupUser.city;
   }

   getSelectedEvents() {
    return this.dataService.getSelectedEvents();
  }

}
