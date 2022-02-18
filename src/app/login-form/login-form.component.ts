import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Stage } from '../models/stage.model';
import { User } from '../models/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private dataService: DataService, public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginValid = true;
  }

  validateLoginPassword(login: string, password: string) {
    return this.dataService.validateLoginPassword(login, password);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
       duration: 2000,
       horizontalPosition: 'center',
       verticalPosition: 'top',
       panelClass: ['red-snackbar']
    });
 }

  onClick() {
    if (this.validateLoginPassword(this.username, this.password) === true) {
      this.dataService.login(this.username);
      this.dataService.setStage(Stage.Events);
    } else {
      this.openSnackBar("Nieprawidłowy login i/lub hasło!");
    }
  }
}
