import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x: any) => console.log('User logged in'),
      error: (err: any) => console.log(err)
    };

    this.AuthService.login(f.value).subscribe(loginObserver)
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
