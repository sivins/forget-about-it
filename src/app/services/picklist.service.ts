import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Picklists } from '../models/picklists';

@Injectable()
export class PicklistService {
  private _picklists: Picklists;
  private _userSubject: BehaviorSubject<Picklists> = new BehaviorSubject<Picklists>(this._picklists);

  constructor(private http: HttpClient) { }

  set() {
    // TODO: Uncomment this when API method is implemented
    /*
    this.http.get(`http://localhost:3000/api/v1/picklists`).subscribe((response: Picklists) => {
      this._userSubject.next(response);
    });
    */
  }

  get(): Observable<Picklists> {
    return this._userSubject.asObservable();
  }
}
