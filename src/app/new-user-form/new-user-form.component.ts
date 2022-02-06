import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-new-user-form',
    templateUrl: './new-user-form.component.html',
    styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public user: User = new User('','','','','','','');
  @Output() validateData_EventEmitter = new EventEmitter();
  @Output() goBack_EventEmitter = new EventEmitter();

  constructor(private dataService: DataService) { }

  goBack(){
    this.goBack_EventEmitter.emit();
  }

  acceptInputData(){
    if(this.user.name != '' && this.user.lastname != '' && this.user.road != '' && this.user.city != "" && this.user.zipcode !=""){
      this.dataService.user = this.user;
      this.validateData_EventEmitter.emit();
    }
  }

  getMockupUser() {
    return this.dataService.mockupUser;
  }
}
