import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SitehomeComponent } from './sitehome.component';
import { LoginComponent } from '../../sitemodules/login/login.component';
import { RegisterComponent } from '../../sitemodules/register/register.component';
import { HomeComponent } from '../../sitemodules/home/home.component';
import { SitesharedModule } from '../../siteshared/siteshared.module';



@NgModule({
  declarations: [
    SitehomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SitesharedModule
  ]
})
export class SitehomeModule { }
