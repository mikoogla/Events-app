import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1',opis: 'Card 1',content:"09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'Card 2',opis: 'Card 1',content:"09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'Card 3',opis: 'Card 1',content:"09:00 - 10:00", cols: 1, rows: 1 },
          { title: 'Card 4',opis: 'Card 1',content:"09:00 - 10:00", cols: 1, rows: 1 }
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
}
