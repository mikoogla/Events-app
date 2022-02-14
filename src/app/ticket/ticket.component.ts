import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public user = this.getMockupUser();
  constructor(private dataService: DataService) { }

  getMockupUser() {
    return this.dataService.mockupUser;
  }
  
  ngOnInit(): void {
  }

}
