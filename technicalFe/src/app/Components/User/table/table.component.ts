import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { promise } from 'protractor';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { TableDataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  title = 'angular-mateiral';
  users: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'userName', 'firstName', 'lastName', 'email', 'phoneNumber'];

  constructor(private dialogRef: MatDialog, public userSerive: UserService) {
    
    this.dataSource = new TableDataSource();
  }

  async ngOnInit(): Promise<void> {

    let request = this.userSerive.GetAllUsers().then(resp =>{
      this.users = resp;
      localStorage.setItem('users', JSON.stringify(this.users));
    })
    
  }

  openDialog() {
    this.dialogRef.open(ModalComponent, {
      data: {
        userId: this.selectedUser.userId,
        userName: this.selectedUser.userName,
        firstName: this.selectedUser.firstName,
        lastName: this.selectedUser.lastName,
        email: this.selectedUser.email,
        phoneNumber: this.selectedUser.phoneNumber
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  selectedUser: any;

  radioSelected(event: any) {
    this.selectedUser = event.value;
    console.log(this.selectedUser);
  }
  updateUser() {
    console.warn("update", this.selectedUser.firstName)
  }

}
