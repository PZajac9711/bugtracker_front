import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BoardComponent} from '../board/board.component';
import {AuthenticationComponent} from '../authentication/authentication.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {
  }

  openDialog(gotAccount): void {
    const dialogRef = this.dialog.open(AuthenticationComponent, {
      data: gotAccount
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
