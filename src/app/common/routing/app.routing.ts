import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from 'webapp/user-info/user-detail/user-detail.component';

import { HomeComponent } from '../../webapp/home/home.component';


export const router: Routes = [
    //routes for anonimous users
    { path: '', component: HomeComponent },
    { path: ':id', component: UserDetailComponent },



];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);