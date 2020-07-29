import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-childFullCalendar',
  templateUrl: './childFullCalendar.component.html',
  styleUrls: ['./childFullCalendar.component.css']
})
export class ChildFullCalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; // important!

  holidayEvents = [];
  constructor(private authSerivce: AuthService) { }
  ngOnInit(): void {
    console.log(this.authSerivce.listUser);


    this.holidayEvents = this.authSerivce.listUser.filter(a => a.holiday).map(user => { return {title: user.username + ' `s holiday starts',
                                                                 date: user.holiday.startDate.toISOString().split('T')[0]}; });  
    const events2 = (this.authSerivce.listUser.filter(a => a.holiday).map(user => { return {title: user.username + ' `s holiday ends',
                     date: user.holiday.endDate.toISOString().split('T')[0]}; }));

    this.holidayEvents = this.holidayEvents.concat(events2);

  }
 
}
