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
    return this.dataService.user.name;
   }

   getLastname() {
     return this.dataService.user.lastname;
   }

   getAddress() {
    return this.dataService.user.road + ", " + this.dataService.user.zipcode + " " + this.dataService.user.city;
   }

   getSelectedEvents() {
    return this.dataService.getSelectedEvents();
  }

}
