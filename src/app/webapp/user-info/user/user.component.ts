import { Component, Input } from '@angular/core';
import { UserModel } from 'model/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input('user') user: UserModel;




}
