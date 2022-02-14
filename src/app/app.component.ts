import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Stage } from './models/stage.model';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventy2';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'sampletext';
  constructor(private dataService: DataService) {}

  // this allows you to use enum.value in html template
  public get Stage() {
    return Stage;
  }

  getCurrentStage() {
    return this.dataService.getCurrentStage();
  }
}
