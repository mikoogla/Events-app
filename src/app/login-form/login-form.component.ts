import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Stage } from '../models/stage.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginValid = true;
  }

  onClick() {
    this.dataService.setStage(Stage.Events);
  }
}
