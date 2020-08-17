import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/api/public';

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
}
