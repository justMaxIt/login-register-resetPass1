import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://swapi.dev/api/planets/'

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        console.log(user);

        if (user.result.succeeded) {
          localStorage.setItem('token', user.token)
        }
      })
    )
  }
}
