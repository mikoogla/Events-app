import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public downloadContent = document.querySelector('#capture');
  public user = this.getUser();
  public Events = this.getSelectedEvents();
  constructor(private dataService: DataService) { }

  getUser() {
    return this.dataService.user;
  }
  getSelectedEvents() {
    return this.dataService.getSelectedEvents();
  }
  ngOnInit(): void {
    
  }
  download(){
    var container = document.getElementById("capture")!;// full page 
			html2canvas(container).then(function(canvas) {
                
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "Bilet_dni_informatyki.png";
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
            });
  }
}
