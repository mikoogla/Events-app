import { Component, OnInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Event } from '../models/event.model';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  event: any;
}

export interface EventDay {
  date: string;
  events: Event[];
}

@Component({
  selector: 'app-list-available-events',
  templateUrl: './list-available-events.component.html',
  styleUrls: ['./list-available-events.component.css']
})
export class ListAvailableEventsComponent {

  agenda: EventDay[] = [
    {
        date: "19 października (wtorek)",
        events: [
          { date: "19 października (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" },
          { date: "19 października (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" },
          { date: "19 października (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" }
        ]
    },
    {
      date: "20 października (wtorek)",
      events: [
        { date: "19 października (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" }
      ]
    },
    {
      date: "21 października (środa)",
      events: [
        { date: "19 października (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" }
      ]
    }
  ]


  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService, public dialog: MatDialog) {
  }

  eventsSelected() {
    return this.dataService.getEventsSelectedCount();
  }

  onCheckboxChange(event: any, card: any) {

    console.log(event);
    console.log(card);

    const newEvent = new Event(card.date, card.time, card.title, card.description);

    if (event.checked === true) {
      this.dataService.selectEvent(newEvent);
    }
    else {
      this.dataService.removeEvent(newEvent)
    }

    console.log(this.dataService.getSelectedEvents());
  }

  openMoreInfoBox(event: any) {
    const dialogRef = this.dialog.open(DialogMoreInfo, {
      width: '500px',
      data: { event: event },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-more-info',
  templateUrl: 'dialog-more-info.html',
})
export class DialogMoreInfo {
  constructor(
    public dialogRef: MatDialogRef<DialogMoreInfo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
