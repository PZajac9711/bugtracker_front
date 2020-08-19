import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  token;
  information;
  isChanged = false;
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  rePasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('token') !== null) {
        this.token = params.get('token');
      }
    });
  }

  // tslint:disable-next-line:typedef
  disableReset() {
    return this.passwordFormControl.valid && this.rePasswordFormControl.valid;
  }
  // tslint:disable-next-line:typedef
  reset() {
    this.dataService.resetPassword(this.token, this.passwordFormControl.value).subscribe(response => {
      if (response.status === 200) {
        this.information = 'Password changed, redirecting to main page after 5 seconds';
        this.isChanged = true;
        setTimeout(() => {
          this.route.navigate(['/']);
        }, 5000);
      }
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
