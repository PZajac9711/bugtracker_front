import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://bugtrackerexa.herokuapp.com/api/public';
  private urlWithToken = 'https://bugtrackerexa.herokuapp.com/api/private';

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
}
