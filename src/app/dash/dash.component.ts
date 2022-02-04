import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private dataService: DataService) {}

  hasSelectedAtLeastOneEvent() : boolean {
    if(this.dataService.getEventsSelectedCount()>=1){
      return true;
    } 
    return false;   
  }

} 
