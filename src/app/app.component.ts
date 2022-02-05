import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Stage } from './models/stage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventy2';

  constructor(private dataService: DataService) {}

  // this allows you to use enum.value in html template
  public get Stage() {
    return Stage;
  }

  getCurrentStage() {
    return this.dataService.getCurrentStage();
  }
}
