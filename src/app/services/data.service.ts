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
  public hasConfirmedDataInForm : boolean = false;
  public registeredUsers : User[] = [];
  public hasConfirmedTicket : boolean = false;
  public hasGeneratedTicket : boolean = false;

  constructor() { 
    this.mockupUser = new User('jkowalski@gmail.com','1234','Jan','Kowalski','ul. Armii Krajowej 58','Katowice','40-671'); 
    this.user = new User('','','','','','','');
    this.registeredUsers.push(this.mockupUser);
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
    this.selectedEvents = [];
    this.hasSelectedThreeEvents = false;
    this.hasConfirmedDataInForm = false;
    this.hasConfirmedTicket = false;
    this.setStage(Stage.WelcomeScreen);
  }

  setStage(stage: Stage) {
    this.currentStage = Stage.Loading;
    setTimeout(() => {
      console.log('Now switch');
      this.currentStage = stage;
    }, 350);
  }

  getCurrentStage() {
    return this.currentStage;
  }

  validateLoginPassword(login: string, password: string) {
    const found = this.registeredUsers.find(user => user.login === login);
    return found !== undefined && found.password === password;
  }
  
  hasFilledAllDataInUser() : boolean{
    if(this.user.name != '' && this.user.lastname != '' && this.user.road != '' && this.user.city != "" && this.user.zipcode !=""){
      return true;
    }
    return false;
  }

  confirmDataInForm() {
    if(this.hasFilledAllDataInUser() == true){
      this.hasConfirmedDataInForm = true;
    }
  }

//tesatda

  isLoginAvailable(login: String) {
    return this.registeredUsers.find(user => user.login === login) === undefined;
  }

  registerNewUser(user: User) {
    this.registeredUsers.push(user);
    console.log(this.registeredUsers);
  }

  getUserByLoginFromRegisteredUsers(login: string) {
    return this.registeredUsers.find(user => user.login === login);
  }

  login(userLogin: string) {
    const found = this.getUserByLoginFromRegisteredUsers(userLogin);
    this.user = found !== undefined ? found : this.mockupUser;
  }

  confirmTicket() {
    this.setStage(this.currentStage);
    this.hasConfirmedTicket = true;
    this.hasGeneratedTicket = true;
  }

  cancelTicket() {
    this.setStage(this.currentStage);
    this.hasConfirmedTicket = false;
    this.hasGeneratedTicket = false;
  }
}
