import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {AngularMaterialModule} from './angular-material.module';
import { LaSollutionComponent } from './la-sollution/la-sollution.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { PerformancesComponent } from './performances/performances.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { ServicesComponent } from './services/services.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaSollutionComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    IntegrationsComponent,
    ServicesComponent,
    PerformancesComponent,
    ContactComponent,
    AproposComponent,MentionsLegalesComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    HttpClientModule ,ReactiveFormsModule ,FormsModule ,
    AngularMaterialModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    FormsModule,
    MatToolbarModule,
    MatListModule, RouterModule ,
    RouterModule.forRoot([{path: '', component: HomeComponent ,},
    { path: 'contact', component: ContactComponent }, 
    {path: 'integrations', component: IntegrationsComponent,},{path: 'services', component: ServicesComponent,},
    {path: 'a-propos', component: AproposComponent,},
    {path: 'fonctionnalites-myrhis/la-solution', component: LaSollutionComponent,},
    {path: 'fonctionnalites-myrhis/performances', component: PerformancesComponent,},
    {path: 'mentions-legales', component: MentionsLegalesComponent,},])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
