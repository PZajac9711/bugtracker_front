import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../services/data.service';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewTaskComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  constructor(public dialogRef: MatDialogRef<CreateBoardComponent>, private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public name: string) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  newTask() {
    this.dataService.addNewTask(this.name, this.nameFormControl.value).subscribe(response => {
      console.log(response);
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }
  // tslint:disable-next-line:typedef
  disableButton() {
    return this.nameFormControl.valid;
  }
}
