import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaSollutionComponent } from './la-sollution/la-sollution.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { PerformancesComponent } from './performances/performances.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';





const routes: Routes = [  
  {path: '',
		children: [ 
{path: '', component: HomeComponent ,},
{ path: '', pathMatch: 'full', redirectTo: '/home' },
{ path: 'contact', component: ContactComponent , data: {animation: 'contact'}}, 
{path: 'integrations', component: IntegrationsComponent, data: {animation: 'integrations'}}
,{path: 'services', component: ServicesComponent, data: {animation: 'services'}},
{path: 'a-propos', component: AproposComponent, data: {animation: 'a-propos'}},
{path: 'fonctionnalites-myrhis/la-solution', component: LaSollutionComponent, data: {animation: 'La-solution'}},
{path: 'fonctionnalites-myrhis/performances', component: PerformancesComponent, data: {animation: 'performances'}},
{path: 'mentions-legales', component: MentionsLegalesComponent, },]}, 	{
  path: '**',
  redirectTo: 'home'
} ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

