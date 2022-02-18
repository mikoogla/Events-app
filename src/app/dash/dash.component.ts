import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  ngOnInit() {}
  
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  hasSelectedAtLeastOneEvent() : boolean {
    if(this.dataService.getEventsSelectedCount()>=1){
      return true;
    } 
    return false;   
  }

  hasFilledAllDataInUser() : boolean {
    if(this.dataService.hasFilledAllDataInUser()){
      return true;
    }
    return false;
  }

  confirmDataInForm() {
    this.dataService.confirmDataInForm();
  }

  hasConfirmedDataInForm() : boolean {
    if(this.dataService.hasConfirmedDataInForm == true) {
      return true;
    }
    return false;
  }

  openDialogConfirmationBox(stepper: MatStepper) {
    const dialogRef = this.dialog.open(DialogConfirmation, {
      width: '250px',
      data: { stepper : stepper},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.dataService.hasConfirmedTicket == true){
        stepper.next();
      }
    });
  }

} 

@Component({
  selector: 'dialog-confirmation',
  templateUrl: 'dialog-confirmation.html',
})
export class DialogConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmation>,
    private dataService: DataService
  ) { }

  confirmClick(): void {
    this.dialogRef.close();
    this.dataService.confirmTicket();
  }

  cancelClick() : void {
    this.dialogRef.close();
  }

}