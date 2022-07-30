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
import {WorkhomepageComponent} from "./workhomepage/workhomepage.component";
import {ForgetpasswordComponent} from "./forgetpassword/forgetpassword.component";
import {WorkproductsComponent} from "./workproducts/workproducts.component";
import {WorknewsComponent} from "./worknews/worknews.component";
import {WorktipsComponent} from "./worktips/worktips.component";
import {WorkcontactsComponent} from "./workcontacts/workcontacts.component";
import {WorkuiComponent} from "./workui/workui.component";
import {TermsComponent} from "./terms/terms.component";
import {Exam1Component} from "./exam1/exam1.component";

const appRoutes: Routes = [
  {path: '', component: Exam1Component},

  {path: 'about-us', component:AboutusComponent},

  {path: 'signin', component:SigninComponent},
  {path: 'signin/signup', redirectTo: 'signup', pathMatch: 'full' },
  {path: 'signin/forgetpassword', redirectTo: 'forgetpassword', pathMatch: 'full' },
  {path: 'signin/home', redirectTo: '', pathMatch: 'full' },

  {path: 'signup', component:SignupComponent},
  {path: 'signup/signin', redirectTo: 'signin', pathMatch: 'full' },

  {path: 'forgetpassword', component:ForgetpasswordComponent},
  {path: 'forgetpassword/signin', redirectTo: 'signin', pathMatch: 'full' },

  {path: 'products', component:WorkproductsComponent},
  {path: 'products/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'products/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'products/news', redirectTo: 'news', pathMatch: 'full' },
  {path: 'products/tips', redirectTo: 'tips', pathMatch: 'full' },
  {path: 'products/contacts', redirectTo: 'contacts', pathMatch: 'full' },
  {path: 'products/ui', redirectTo: 'ui', pathMatch: 'full' },
  {path: 'products/terms', redirectTo: 'terms', pathMatch: 'full' },

  {path: 'news', component:WorknewsComponent},
  {path: 'news/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'news/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'news/products', redirectTo: 'products', pathMatch: 'full' },
  {path: 'news/tips', redirectTo: 'tips', pathMatch: 'full' },
  {path: 'news/contacts', redirectTo: 'contacts', pathMatch: 'full' },
  {path: 'news/ui', redirectTo: 'ui', pathMatch: 'full' },
  {path: 'news/terms', redirectTo: 'terms', pathMatch: 'full' },

  {path: 'tips', component:WorktipsComponent},
  {path: 'tips/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'tips/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'tips/products', redirectTo: 'products', pathMatch: 'full' },
  {path: 'tips/news', redirectTo: 'news', pathMatch: 'full' },
  {path: 'tips/contacts', redirectTo: 'contacts', pathMatch: 'full' },
  {path: 'tips/ui', redirectTo: 'ui', pathMatch: 'full' },
  {path: 'tips/terms', redirectTo: 'terms', pathMatch: 'full' },

  {path: 'contacts', component:WorktipsComponent},
  {path: 'contacts/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'contacts/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'contacts/products', redirectTo: 'products', pathMatch: 'full' },
  {path: 'contacts/news', redirectTo: 'news', pathMatch: 'full' },
  {path: 'contacts/tips', redirectTo: 'tips', pathMatch: 'full' },
  {path: 'contacts/ui', redirectTo: 'ui', pathMatch: 'full' },
  {path: 'contacts/terms', redirectTo: 'terms', pathMatch: 'full' },

  {path: 'ui', component:WorkuiComponent},
  {path: 'ui/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'ui/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'ui/products', redirectTo: 'products', pathMatch: 'full' },
  {path: 'ui/news', redirectTo: 'news', pathMatch: 'full' },
  {path: 'ui/tips', redirectTo: 'tips', pathMatch: 'full' },
  {path: 'ui/contacts', redirectTo: 'contacts', pathMatch: 'full' },
  {path: 'ui/terms', redirectTo: 'terms', pathMatch: 'full' },

  {path: 'terms', component:ClassroomComponent},
  {path: 'terms/ ', redirectTo: '', pathMatch: 'full' },//homepage
  {path: 'terms/signin', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'terms/products', redirectTo: 'products', pathMatch: 'full' },
  {path: 'terms/news', redirectTo: 'news', pathMatch: 'full' },
  {path: 'terms/tips', redirectTo: 'tips', pathMatch: 'full' },
  {path: 'terms/ui', redirectTo: 'ui', pathMatch: 'full' },
  {path: 'terms/contacts', redirectTo: 'contacts', pathMatch: 'full' },
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
    SigninComponent,
    ForgetpasswordComponent,
    WorkhomepageComponent,
    WorkproductsComponent,
    WorknewsComponent,
    WorktipsComponent,
    WorkcontactsComponent,
    WorkuiComponent,
    TermsComponent,
    Exam1Component

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
