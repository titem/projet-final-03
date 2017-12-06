import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListGarderieComponent } from './container/list-garderie/list-garderie.component';
import { ContainerComponent } from './container/container.component';
import { OrgDetailsComponent } from './container/org-details/org-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { OrgFormComponent } from './org-form/org-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material';
import { LogService } from './shared/services/log-service/log-service.component';
import { OrgService } from './shared/services/org-service/org-service.component';
import { HttpClientModule } from '@angular/common/http';

import {APP_ROUTES} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ListGarderieComponent,
    ContainerComponent,
    OrgDetailsComponent,
    PersonFormComponent,
    OrgFormComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule,
    // MatDialogModule,
    APP_ROUTES
  ],
  providers: [
    OrgService,
    LogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
