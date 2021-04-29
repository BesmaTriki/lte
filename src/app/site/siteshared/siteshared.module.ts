import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sitecomponents/footer/footer.component';
import { HeaderComponent } from './sitecomponents/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
 FooterComponent,
 HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
exports: [
    FooterComponent,
    HeaderComponent
     ]
})
export class SitesharedModule { }
