import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudsharedModule } from '../../etudshared/etudshared.module';
import { RouterModule } from '@angular/router';


import { EtuddashboardComponent } from '../../etudmodules/etuddashboard/etuddashboard.component';
import { EtudmessageComponent } from '../../etudmodules/etudmessage/etudmessage.component';
import { EtudcoursComponent } from '../../etudmodules/etudcours/etudcours.component';
import { EtudprofileComponent } from '../../etudmodules/etudprofile/etudprofile.component';
import { EtudhomeComponent } from './etudhome.component';



@NgModule({
  declarations: [
EtudhomeComponent,
EtuddashboardComponent,
EtudmessageComponent,
EtudcoursComponent,
EtudmessageComponent,
EtudprofileComponent
  ],
  imports: [
    CommonModule,
    EtudsharedModule,
    RouterModule
  ]
})
export class EtudhomeModule { }
