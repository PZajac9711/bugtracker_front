import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BoardComponent} from '../board/board.component';
import {AuthenticationComponent} from '../authentication/authentication.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.route.navigate(['/boards']);
    }
  }

  constructor(public dialog: MatDialog, private route: Router) {
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
