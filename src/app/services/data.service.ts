import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/api/public';
  private urlWithToken = 'http://localhost:8080/api/private';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  registerUser(userLogin, userPassword, userEmail) {
    return this.http.post(this.url + '/registration', {
      login: userLogin,
      password: userPassword,
      email: userEmail
    }, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  loginUser(userLogin, userPassword) {
    return this.http.post(this.url + '/authenticate', {
      login: userLogin,
      password: userPassword
    }, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  createNewBoard(boardName) {
    return this.http.get(this.urlWithToken + '/createProject?boardName=' + boardName, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  getAllBoards() {
    return this.http.get(this.urlWithToken + '/findAllBoards', {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  addNewTask(name, dsc) {
    return this.http.post(this.urlWithToken + '/addTask', {
      boardName: name,
      description: dsc
    }, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  getTasks(projectName) {
    return this.http.get(this.urlWithToken + '/getTasks?boardName=' + projectName, {observe: 'response'});
  }

  // tslint:disable-next-line:typedef
  updateTaskDetails(name, task, taskDetails) {
    return this.http.post(this.urlWithToken + '/updateTaskDetails', {
      projectName: name,
      taskName: task,
      details: taskDetails
    }, {observe: 'response'});
  }
  // tslint:disable-next-line:typedef
  assignTaskToMe(name, task) {
    return this.http.post(this.urlWithToken + '/signToMe', {
      projectName: name,
      taskName: task
    }, {observe: 'response'});
  }
  // tslint:disable-next-line:typedef
  markTaskAsDone(name, task){
    return this.http.post(this.urlWithToken + '/markAsDone', {
      projectName: name,
      taskName: task
    }, {observe: 'response'});
  }
  // tslint:disable-next-line:typedef
  approveTask(name, task, decision){
    return this.http.post(this.urlWithToken + '/approve', {
      projectName: name,
      taskName: task,
      approved: decision
    }, {observe: 'response'});
  }
  // tslint:disable-next-line:typedef
  assignTaskTo(name, task, toUserName) {
    return this.http.post(this.urlWithToken + '/assignTaskTo?toUserName=' + toUserName, {
      projectName: name,
      taskName: task
    }, {observe: 'response'});
  }
  // tslint:disable-next-line:typedef
  addUser(login, name) {
    return this.http.post(this.urlWithToken + '/addUser', {
      userName: login,
      projectName: name
    }, {observe: 'response'});
  }
}
