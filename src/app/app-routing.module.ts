import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenuComponent } from './contenu/contenu.component';
import { EnshomeComponent } from './enseignant/enslayouts/enshome/enshome.component';
import { AddcoursComponent } from './enseignant/ensmodules/addcours/addcours.component';
import { EnscoursComponent } from './enseignant/ensmodules/enscours/enscours.component';
import { EnsdashboardComponent } from './enseignant/ensmodules/ensdashboard/ensdashboard.component';
import { EnsmessageComponent } from './enseignant/ensmodules/ensmessage/ensmessage.component';
import { EnsprofileComponent } from './enseignant/ensmodules/ensprofile/ensprofile.component';
import { EtudhomeComponent } from './etudient/etudlayouts/etudhome/etudhome.component';
import { EtudcoursComponent } from './etudient/etudmodules/etudcours/etudcours.component';
import { EtudmessageComponent } from './etudient/etudmodules/etudmessage/etudmessage.component';
import { EtudprofileComponent } from './etudient/etudmodules/etudprofile/etudprofile.component';
import { SitehomeComponent } from './site/sitelayouts/sitehome/sitehome.component';
import { HomeComponent } from './site/sitemodules/home/home.component';
import { LoginComponent } from './site/sitemodules/login/login.component';
import { RegisterComponent } from './site/sitemodules/register/register.component';


const routes: Routes = [

{path: 'contenu',
component:ContenuComponent},
{path: '',
component: SitehomeComponent,
children: [{
  path: '',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
}
]},
{path: 'enshome',
component: EnshomeComponent,
children: [{
  path: 'ensdashboard',
  component: EnsdashboardComponent
},
{
  path: 'ensmessage',
  component: EnsmessageComponent
},
{
  path: 'ensprofile',
  component: EnsprofileComponent
},
{
  path: 'addcours',
  component: AddcoursComponent
},
{
  path: 'listcours',
  component: EnscoursComponent
}
]},
{path: 'etudhome',
component: EtudhomeComponent,
children: [{
  path: 'etuddashboard',
  component: EnsdashboardComponent
},
{
  path: 'etudcours',
  component: EtudcoursComponent
},
{
  path: 'etudmessage',
  component: EtudmessageComponent
},
{
  path:'etudprofile',
  component: EtudprofileComponent
}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
