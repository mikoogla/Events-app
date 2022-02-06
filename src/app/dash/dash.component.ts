import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  ngOnInit() {}
  
  constructor(private dataService: DataService) {}

  hasSelectedAtLeastOneEvent() : boolean {
    if(this.dataService.getEventsSelectedCount()>=1){
      return true;
    } 
    return false;   
  }

  hasFilledAllDataInUser() : boolean {
    if(this.dataService.hasFilledAllDataInUser()){
      return true;
    }
    return false;
  }

} 
