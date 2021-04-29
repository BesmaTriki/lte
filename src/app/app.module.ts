import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnshomeModule } from './enseignant/enslayouts/enshome/enshome.module';
import { EtudhomeModule } from './etudient/etudlayouts/etudhome/etudhome.module';
import { SitehomeModule } from './site/sitelayouts/sitehome/sitehome.module';
import { RouterModule } from '@angular/router';
import { EnsprofileComponent } from './enseignant/ensmodules/ensprofile/ensprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    EnsprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EnshomeModule,
    EtudhomeModule,
    SitehomeModule,
    RouterModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
