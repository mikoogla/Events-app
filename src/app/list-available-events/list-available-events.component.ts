import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-list-available-events',
  templateUrl: './list-available-events.component.html',
  styleUrls: ['./list-available-events.component.css']
})
export class ListAvailableEventsComponent {

  selectedEvents: any[] = [];

/** Based on the screen size, switch from standard to one column per row */
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { title: 'kod',opis: 'kod',content:"09:00 - 10:00", cols: 1, rows: 1 },
        { title: 'pętle',opis: 'pętle',content:"09:00 - 10:00", cols: 1, rows: 1 },
        { title: 'praca',opis: 'praca',content:"09:00 - 10:00", cols: 1, rows: 1 },
        { title: 'matematyka',opis: 'matematyka',content:"09:00 - 10:00", cols: 1, rows: 1 }
      ];
    }

    return [
      { title: 'Jak zabezpieczyć swój kod? Konferencja',opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum lacus nec scelerisque tristique. Praesent interdum dolor vitae turpis ultricies, ut molestie nunc bibendum. ',content:"09:00 - 10:00", cols: 2, rows: 1 },
      { title: 'Pętla for czy while? Wykład',opis: 'feugiat. Phasellus laoreet est condimentum, varius massa bibendum, tincidunt massa. In vehicula elementum mi eget consectetur. Nulla rhoncus, ',content:"09:00 - 10:00", cols: 2, rows: 1 },
      { title: 'Oferty pracy od sponsorów',opis: 'sque eu venenatis ut, accumsan ut ex. Donec commodo rh',content:"09:00 - 10:00", cols: 2, rows: 1 },
      { title: 'Matematyka w C++, Webinar',opis: 'sem nulla, vestibulum et venenatis et, fermentum vel mauris. Aliquam viverra arcu ac ultrices viverra. Quisque auctor eleifend dolor, non',content:"09:00 - 10:00", cols: 2, rows: 1 }
    ];
  })
);

  constructor(private breakpointObserver: BreakpointObserver) {}

  onCheckboxChange(event: any, card: any) {
    console.log(event);
    console.log(card);
    if (event.checked === true) {
      if (!this.selectedEvents.find(element => element.title === card.title))
        this.selectedEvents.push(card);
    }
    else {
      this.selectedEvents = this.selectedEvents.filter(x => x.title !== card.title);
    }
    console.log(this.selectedEvents);
  }
}
