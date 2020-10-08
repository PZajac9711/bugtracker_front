import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BoardComponent} from '../board/board.component';
import {AuthenticationComponent} from '../authentication/authentication.component';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  response$: any;

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.route.navigate(['/boards']);
    }
    if (localStorage.getItem('first') === null) {
      confirm('Note: strona klienta jest rozdzielona z logiką biznesową przez co logowanie za pierwszym razem może trwać około 30 sekund(czas może ulec zmianie)' +
        ' jest to spowodowane specyfikacją heroku, gdyż przez brak aktywności serwer zostaje postawiony w stan uśpienia. Proszę mieć to na uwadze.');
      localStorage.setItem('first', 'true');
    }
  }

  constructor(public dialog: MatDialog, private route: Router, private data: DataService) {
    this.data.start().toPromise().then(result => {
      // logger on development side
    });
  }

  openDialog(gotAccount): void {
    const dialogRef = this.dialog.open(AuthenticationComponent, {
      data: gotAccount
    });

    dialogRef.afterClosed().subscribe(result => {
      // logger on development side
    });
  }
}
