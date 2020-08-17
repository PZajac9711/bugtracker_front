import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AuthenticationComponent} from '../authentication/authentication.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  response$: any;

  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateBoardComponent, {
      // no data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
