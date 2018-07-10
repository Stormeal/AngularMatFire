import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements AfterViewInit {

  displayedColumns = ['name', 'displayname', 'age', 'email', 'edit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.afs.collection<any>('users').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {

      data: data
    });
  }



  trackByUid(index, item) {
    return item.uid;
  }

}


