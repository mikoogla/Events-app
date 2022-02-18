import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  newUser = new User('','','','','','','');

  constructor(private dataService: DataService, public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
       duration: 2000,
       horizontalPosition: 'center',
       verticalPosition: 'top',
       panelClass: ['red-snackbar']
    });
 }

  onRegisterClick() {
    console.log(this.newUser);
    
    if (this.dataService.isLoginAvailable(this.newUser.login)) {
      this.dataService.registerNewUser(this.newUser);
      this.openSnackBar('Udana rejestracja');
      // setTimeout(() => {
      //   console.log('Now switch to login');
      //   this.dataService.resetApp();
      // }, 1000);
      this.dataService.resetApp();
    } else {
      this.openSnackBar('Użytownik z takim loginem już istnieje');
    }
  }

  hasFilledAllDataInUser() {
    return this.newUser.hasAllDataFilledOut();
  }

}
