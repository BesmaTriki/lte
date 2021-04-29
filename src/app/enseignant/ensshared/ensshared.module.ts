import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { EditorModule } from "@tinymce/tinymce-angular";
import { FooterComponent } from './enscomponents/footer/footer.component';
import { HeaderComponent } from './enscomponents/header/header.component';
import { SidebarComponent } from './enscomponents/sidebar/sidebar.component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatMenuModule ,
    MatMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    EditorModule
  ],
exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class EnssharedModule { }
