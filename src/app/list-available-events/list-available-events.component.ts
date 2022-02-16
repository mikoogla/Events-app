import { Component, OnInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Event } from '../models/event.model';
import { DataService } from '../services/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface EventDay {
  date: string;
  events: Event[];
}

export interface DialogData {
  event: Event;
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

  agenda: EventDay[] = [
    {
      date: "19 października 2021 (wtorek)",
      events: [
        new Event("19 października 2021 (wtorek)", "09:30 - 11:00", "Uroczyste otwarcie - Horyzonty AI", "Wykład otwierający: prof. Aleksandra Przegalińska - Horyzony AI"),
        new Event("19 października 2021 (wtorek)  ", "11:30 - 12:00", "AI - W jaki sposób sztuczna inteligencja rewolicjonizuje nasze życie codzienne? - Fujitsu", "Poznaj nowoczesne zastosowania z obszaru AI, nad którymi specjaliści Fujitsu pracują na co dzień oraz przykłady gdzie sztuczna inteligencja wpływa na nasze codzienne życie."),
      ]
    },
    {
      date: "20 października 2021 (środa)",
      events: [
        new Event("20 października 2021 (środa)", "09:30 - 11:00", "Exploracja danych IoT w chmurze Azure - ABB", "Exploracja danych IoT w chmurze Azure - demonstracja możliwości systemów eksploracji i analityki danych na przykładzie analizy szeregów czasowych oraz warsztaty praktyczne.")
      ]
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService, public dialog: MatDialog) {
  }

  eventsSelected() {
    return this.dataService.getEventsSelectedCount();
  }

  onCheckboxChange(event: any, card: any) {

    console.log(event);
    console.log(card);

    const newEvent = new Event('poniedzialek', card.content, card.title, card.opis);

    if (event.checked === true) {
      this.dataService.selectEvent(newEvent);
    }
    else {
      this.dataService.removeEvent(newEvent)
    }

    console.log(this.dataService.getSelectedEvents());
  }

  openDialog(thisEvent: Event): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {event: thisEvent}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'more-info-box.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public event: Event,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
