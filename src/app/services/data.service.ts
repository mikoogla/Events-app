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
  public mockupUser: User;
  public user: User;

  constructor() { 
    this.mockupUser = new User('jkowalski@gmail.com','1234','Jan','Kowalski','ul. Armii Krajowej 58','Katowice','40-671'); 
    this.user = new User('','','','','','',''); 
  }

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

  resetApp() {
    this.currentStage = 0;
    this.selectedEvents = [];
    this.hasSelectedThreeEvents = false;
  }

  setStage(stage: Stage) {
    this.currentStage = stage;
  }

  getCurrentStage() {
    return this.currentStage;
  }

  validateLoginPassword(login: string, password: string) {
    return login === this.mockupUser.login && password === this.mockupUser.password;
  }
  
  hasFilledAllDataInUser() : boolean{
    if(this.user.name != '' && this.user.lastname != '' && this.user.road != '' && this.user.city != "" && this.user.zipcode !=""){
      return true;
    }
    return false;
  }
}
