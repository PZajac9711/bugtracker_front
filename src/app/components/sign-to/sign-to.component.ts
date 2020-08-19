import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-to',
  templateUrl: './sign-to.component.html',
  styleUrls: ['./sign-to.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignToComponent implements OnInit {
  error;
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
  assignTo() {
    this.dataService.assignTaskTo(this.data[0], this.data[1], this.nameFormControl.value).subscribe(response => {
      this.dialogRef.close(true);
    }, err => {
      this.error = err.error.debugMessage;
    });
  }
}
