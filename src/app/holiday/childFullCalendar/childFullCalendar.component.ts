import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AuthService } from 'src/app/authentification/auth.service';
import { User } from 'src/app/_models/user';
import { Holiday } from 'src/app/_models/holiday';

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
    


    // this.holidayEvents = this.authSerivce.listUser.filter(a => a.holiday).map(user => { return {title: user.username + ' `s holiday starts',
    //                                                              date: user.holiday.startDate.toISOString().split('T')[0]}; });  
    // const events2 = (this.authSerivce.listUser.filter(a => a.holiday).map(user => { return {title: user.username + ' `s holiday ends',
    //                  date: user.holiday.endDate.toISOString().split('T')[0]}; }));

    this.holidayEvents = this.authSerivce.listUser.filter(a => a.holiday).map(a=> this.addHolidayCalendar(a));
    this.holidayEvents= [].concat.apply([], this.holidayEvents);


  }

  addHolidayCalendar(user: User): any[]
  {
    const holidayList = [];
    holidayList.push({title: user.username + 'Start Holiday', date: user.holiday.startDate, color: 'green'});
    holidayList.push({title: user.username + 'End Holiday', date: user.holiday.endDate, color: 'red'});
    
    const start = new Date(user.holiday.startDate);
    start.setDate(start.getDate() + 2);

    const end = new Date(user.holiday.endDate);
    end.setDate(end.getDate() );



    for (let d = start; d <= end; d.setDate(d.getDate() + 1))
    { 
      holidayList.push({ title: user.username + 'Holiday', date: d.toISOString().split('T')[0] });
    }
    return holidayList;
  }
  
}
