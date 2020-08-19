import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {
  error;
  success;
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(public dialogRef: MatDialogRef<CreateBoardComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addUser() {
    this.dataService.addUser(this.nameFormControl.value, this.data).subscribe(response => {
      if (response.status === 200) {
        this.success = 'User added to board';
        this.nameFormControl.reset();
        this.error = '';
      }
    }, err => {
      this.error = err.error.debugMessage;
      this.success = '';
    });
  }
}
