import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonDataService } from 'service/json-data.service';

import { UserModel } from './../../../models/users.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

 
  user$: Observable<UserModel>;
  constructor(private userService: JsonDataService, private route: ActivatedRoute) { 

    const id = this.route.snapshot.paramMap.get('id');
   this.user$ = this.userService.findById(id);

  }

  ngOnInit() {
    
  }

}
