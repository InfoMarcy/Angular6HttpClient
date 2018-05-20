import { routes } from './common/routing/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './webapp/home/home.component';
import { JsonDataService } from 'service/json-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from 'webapp/user-info/user-list/user-list.component';
import { UserComponent } from 'webapp/user-info/user/user.component';
import { UserDetailComponent } from 'webapp/user-info/user-detail/user-detail.component';
import 'rxjs/add/operator/shareReplay';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
