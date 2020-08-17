import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut(){
    // ToDo: no wylogowanie za 2 zlote :), do poprawy
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
