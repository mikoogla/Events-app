import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Stage } from '../models/stage.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService) {}

  isLoggedIn() {
    return this.dataService.currentStage > 1;
  }

  onLogoutClick() {
    this.dataService.logout();
  }

  onRegisterClick() {
    this.dataService.resetApp();
    this.dataService.setStage(Stage.Registration);
  }
}
