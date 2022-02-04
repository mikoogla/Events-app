import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  constructor(private dataService: DataService) {
   }

   getSelectedEvents() {
    return this.dataService.getSelectedEvents();
  }

  ngOnInit(): void {
  }

  click() {
    console.log(this.dataService.selectedEvents);
  }

  

}
