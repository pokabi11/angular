import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {CurrentweatherComponent} from "./currentweather/currentweather.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherforecastComponent} from "./weatherforecast/weatherforecast.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

const appRoutes: Routes = [
  {path:'',component: CurrentweatherComponent},
  {path: 'about-us',component:AboutusComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path: 'signin/signup',   redirectTo: 'signup', pathMatch: 'full' }

]


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    CurrentweatherComponent,
    WeatherforecastComponent,
    AboutusComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
