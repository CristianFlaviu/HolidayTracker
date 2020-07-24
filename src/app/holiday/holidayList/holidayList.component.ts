import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/authentification/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-holidayList',
  templateUrl: './holidayList.component.html',
  styleUrls: ['./holidayList.component.css']
})
export class HolidayListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['No', 'Username', 'Department', 'StartDate', 'EndDate'];
  listUsers: User[];
  dataSource;

  constructor(private authService: AuthService) { }

  ngOnInit(): void{
    console.log(this.authService.getLoggedInUser());
    this.listUsers = this.authService.listUser.filter(a => a.team === this.authService.getLoggedInUser().team );
    this.dataSource = new MatTableDataSource(this.listUsers);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }


}
