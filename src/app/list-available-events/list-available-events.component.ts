import { Component, OnInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Event } from '../models/event.model';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  event: any;
}

@Component({
  selector: 'app-list-available-events',
  templateUrl: './list-available-events.component.html',
  styleUrls: ['./list-available-events.component.css']
})
export class ListAvailableEventsComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'kod', opis: 'kod', content: "09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'pętle', opis: 'pętle', content: "09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'praca', opis: 'praca', content: "09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'matematyka', opis: 'matematyka', content: "09:00 - 10:00", cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Jak zabezpieczyć swój kod? Konferencja', opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum lacus nec scelerisque tristique. Praesent interdum dolor vitae turpis ultricies, ut molestie nunc bibendum. ', content: "09:00 - 10:00", cols: 2, rows: 1 },
        { title: 'Pętla for czy while? Wykład', opis: 'feugiat. Phasellus laoreet est condimentum, varius massa bibendum, tincidunt massa. In vehicula elementum mi eget consectetur. Nulla rhoncus, ', content: "09:00 - 10:00", cols: 2, rows: 1 },
        { title: 'Oferty pracy od sponsorów', opis: 'sque eu venenatis ut, accumsan ut ex. Donec commodo rh', content: "09:00 - 10:00", cols: 2, rows: 1 },
        { title: 'Matematyka w C++, Webinar', opis: 'sem nulla, vestibulum et venenatis et, fermentum vel mauris. Aliquam viverra arcu ac ultrices viverra. Quisque auctor eleifend dolor, non', content: "09:00 - 10:00", cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService, public dialog: MatDialog) {
  }

  eventsSelected() {
    return this.dataService.getEventsSelectedCount();
  }

  onCheckboxChange(event: any, card: any) {

    console.log(event);
    console.log(card);

    const newEvent = new Event(card.content, card.title, card.opis);

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
      width: '250px',
      data: { event: event},
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
