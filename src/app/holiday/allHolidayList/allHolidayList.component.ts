import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/authentification/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {ChildFullCalendarComponent} from '../childFullCalendar/childFullCalendar.component';

@Component({
  selector: 'app-allHolidayList',
  templateUrl: './allHolidayList.component.html',
  styleUrls: ['./allHolidayList.component.css']
})
export class AllHolidayListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['No', 'Username', 'Department', 'StartDate', 'EndDate'];
  listUsers: User[];
  dataSource;

  constructor(private authService: AuthService) { }

  ngOnInit(): void{
    this.listUsers = this.authService.listUser;
    this.dataSource = new MatTableDataSource(this.listUsers);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }

}
