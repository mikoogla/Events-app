import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { User } from '../models/user.model';
import { Stage } from '../models/stage.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public selectedEvents: Event[] = [];
  public hasSelectedThreeEvents: boolean = false;
  public currentStage: Stage = 0;
  public user: User;

  constructor() { this.user = new User('','','','','','',''); }

  getSelectedEvents() {
    return this.selectedEvents;
  }

  getEventsSelectedCount() {
    return this.selectedEvents.length;
  }

  selectEvent(event: Event) {
    if (!this.selectedEvents.find(element => element.title === event.title)) {
      this.selectedEvents.push(event);
    }
    if (this.selectedEvents.length === 3)
      this.hasSelectedThreeEvents = true;
  }

  removeEvent(event: Event) {
    this.selectedEvents = this.selectedEvents.filter(element => element.title !== event.title);
    this.hasSelectedThreeEvents = false;
  }

  hasFilledAllDataInUser() : boolean{
    if(this.user.name != '' && this.user.lastname != '' && this.user.road != '' && this.user.city != "" && this.user.zipcode !=""){
      return true;
    }
    return false;
  }
}
