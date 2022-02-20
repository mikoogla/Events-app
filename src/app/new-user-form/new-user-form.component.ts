import { Component } from '@angular/core';
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
 
  constructor(private dataService: DataService) { }

  getUser() {
    return this.dataService.user;
  }
  
  changeValue() {
    this.dataService.hasConfirmedDataInForm = false;
  }

  onCheckboxChange(event: any) {
    if (event.checked === true)
      this.dataService.hasConfirmedDataInForm = true;
    else
      this.dataService.hasConfirmedDataInForm = false;
  }

  isFormFilled() : boolean {
    return this.dataService.hasConfirmedDataInForm;
  }

  userConfirmedDataInForm() : boolean {
    return this.dataService.hasConfirmedDataInForm;
  }
}
