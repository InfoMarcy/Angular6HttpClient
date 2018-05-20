import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'service/json-data.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from 'model/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: JsonDataService) { }

  users$: Observable<UserModel[]>;
  ngOnInit() {
    this.users$ = this.userService.findAll();
  }

}
