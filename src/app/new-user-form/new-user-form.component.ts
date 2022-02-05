import {Component} from '@angular/core';
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

  validateData(){
    if(this.user.name != '' && this.user.lastname != '' && this.user.road != '' && this.user.city != "" && this.user.zipcode !=""){
      this.dataService.user = this.user;
    }
  }

  getMockupUser() {
    return this.dataService.mockupUser;
  }
}
