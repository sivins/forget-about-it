import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private _user: User;
  private _userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(this._user);

  constructor(private http: HttpClient) { }

  setUser(username: string) {
    this.http.get(`http://localhost:3000/api/v1/user/${username}`).subscribe((response: User) => {
      this._userSubject.next(response);
      console.log(response);
    });
  }

  getUser(): Observable<User> {
    return this._userSubject.asObservable();
  }
}
