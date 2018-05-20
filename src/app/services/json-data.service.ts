import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'model/users.model';



@Injectable()
export class JsonDataService {

  private baseUrl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  findAll(){
       return this.http.get<UserModel[]>(this.baseUrl);
  }

  findById(id:string){
    return this.http.get<UserModel>(this.baseUrl +"/"+ id);
  }


  save(user: UserModel){

    //shareReplay make sure that we dont call multiples times accidentally
    return this.http.post<UserModel>(this.baseUrl, {user}).shareReplay();

  }

}
