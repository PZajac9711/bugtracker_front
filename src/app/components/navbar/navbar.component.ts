import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {NewTaskComponent} from '../new-task/new-task.component';
import {SettingsComponent} from '../settings/settings.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() projectName;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.projectName);
  }

  // tslint:disable-next-line:typedef
  logOut() {
    // ToDo: no wylogowanie za 2 zlote :), do poprawy
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  disableOptions() {
    if (this.projectName === undefined) {
      return false;
    }
    return true;
  }
  // tslint:disable-next-line:typedef
  projectOptions(){
    const dialogRef = this.dialog.open(SettingsComponent, {
      data: this.projectName
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
