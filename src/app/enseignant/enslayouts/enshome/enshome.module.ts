import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnssharedModule } from '../../ensshared/ensshared.module';
import { RouterModule } from '@angular/router';
import { EnshomeComponent } from './enshome.component';
import { EnsmessageComponent } from '../../ensmodules/ensmessage/ensmessage.component';
import { EnscoursComponent } from '../../ensmodules/enscours/enscours.component';
import { AddcoursComponent } from '../../ensmodules/addcours/addcours.component';
import { EnsdashboardComponent } from '../../ensmodules/ensdashboard/ensdashboard.component';

import { EditorModule } from "@tinymce/tinymce-angular";
@NgModule({
  declarations: [
    EnshomeComponent,
    EnsmessageComponent,
    EnscoursComponent,
    AddcoursComponent,
    EnsdashboardComponent
  ],
  imports: [
    CommonModule,
    EnssharedModule,
    RouterModule,
    EditorModule
  ]
})
export class EnshomeModule { }
