import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { PicklistService } from './services/picklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private userService: UserService,
    private picklistService: PicklistService
  ) {
    userService.set('default_user');
    picklistService.set();
  }
}
