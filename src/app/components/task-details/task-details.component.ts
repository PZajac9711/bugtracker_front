import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {DataService} from '../../services/data.service';
import * as jwt_decode from 'jwt-decode';
import {NewTaskComponent} from '../new-task/new-task.component';
import {SignToComponent} from '../sign-to/sign-to.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskDetailsComponent implements OnInit {
  details;
  needReload = false;
  canMarkAsDone = false;
  error;
  userName;

  constructor(public dialogRef: MatDialogRef<CreateBoardComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.details = this.data[2];
    const decodeJwt = jwt_decode(localStorage.getItem('token'));
    if (decodeJwt.login === this.data[3]) {
      this.canMarkAsDone = true;
    }
  }

  // tslint:disable-next-line:typedef
  updateDetails() {
    this.dataService.updateTaskDetails(this.data[1], this.data[0], this.details).subscribe(response => {
      // console.log(response);
      this.needReload = true;
    }, error => {
      // console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  closeDialog() {
    this.dialogRef.close(this.needReload);
  }

  // tslint:disable-next-line:typedef
  assignTaskToMe() {
    this.dataService.assignTaskToMe(this.data[1], this.data[0]).subscribe(response => {
      // console.log(response);
      this.needReload = true;
      this.closeDialog();
    }, error => {
      // console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  markAsDone() {
    this.dataService.markTaskAsDone(this.data[1], this.data[0]).subscribe(response => {
      this.needReload = true;
      this.closeDialog();
    }, err => {
      this.error = err.error.debugMessage;
    });
  }

  // tslint:disable-next-line:typedef
  approve(decision) {
    this.dataService.approveTask(this.data[1], this.data[0], decision).subscribe(response => {
      // console.log(response);
      this.needReload = true;
      this.closeDialog();
    }, err => {
      this.error = err.error.debugMessage;
    });
  }

  // tslint:disable-next-line:typedef
  assignPopup() {
    const dialogRef = this.dialog.open(SignToComponent, {
      data: [this.data[1], this.data[0]]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.needReload = result;
        this.dialogRef.close(this.needReload);
      }
    });
  }
}
