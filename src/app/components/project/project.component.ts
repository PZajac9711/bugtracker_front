import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateBoardComponent} from '../create-board/create-board.component';
import {NewTaskComponent} from '../new-task/new-task.component';
import {TaskDetailsComponent} from '../task-details/task-details.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectName;
  response$: any;
  toDo$: any;
  done$: any;
  inProgress$: any;
  checkMe$: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.projectName = params.get('name');
    });
    this.getTasks();
  }

  // tslint:disable-next-line:typedef
  createTask(name) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: name
    });
    dialogRef.afterClosed().subscribe(result => {
      // logger on development side
    });
  }

  // tslint:disable-next-line:typedef
  taskDetails(name, nameProject, details, to, done) {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      data: [name, nameProject, details, to, done],
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        window.location.reload();
      }
      // console.log(result);
    });
  }
  // tslint:disable-next-line:typedef
  getTasks() {
    this.dataService.getTasks(this.projectName).subscribe(response => {
      this.response$ = response.body;
      this.toDo$ = this.response$.toDo;
      this.done$ = this.response$.done;
      this.inProgress$ = this.response$.inProgress;
      this.checkMe$ = this.response$.checkMe;
      // console.log(this.response$);
    }, error => {
      // console.log(error);
    });
  }
}
