import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {AuthenticationComponent} from '../authentication/authentication.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  response$: any;
  boardList$: any;

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getAllBoards().subscribe(response => {
      // console.log(response);
      this.boardList$ = response.body;
    }, err => {
      // console.log('error' + err);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateBoardComponent, {
      // no data
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

  // tslint:disable-next-line:typedef
  goToProject(name) {
    this.router.navigate(['/project', name]);
  }
}
