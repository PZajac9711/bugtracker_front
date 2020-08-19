import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-generate-reset',
  templateUrl: './generate-reset.component.html',
  styleUrls: ['./generate-reset.component.css']
})
export class GenerateResetComponent implements OnInit {
  information;
  clicked = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  disableReset() {
    return this.emailFormControl.valid;
  }
  // tslint:disable-next-line:typedef
  home(){
    this.router.navigate(['/']);
  }
  // tslint:disable-next-line:typedef
  sendMail(){
    this.dataService.sendEmail(this.emailFormControl.value).subscribe(response => {
      this.information = 'You should recive email if you got account in ours service';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 7000);
    });
  }
}
