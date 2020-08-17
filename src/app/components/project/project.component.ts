import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

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
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.projectName = params.get('name');
    });
    this.getTasks();
  }

  // tslint:disable-next-line:typedef
  createTask() {
    this.dataService.addNewTask(this.projectName, 'hello').subscribe(response => {
      console.log(response);
      window.location.reload();
    }, error => {
      console.log(error);
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
      console.log(this.response$);
    }, error => {
      console.log(error);
    });
  }
}
