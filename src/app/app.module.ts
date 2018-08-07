import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { MetricsComponent } from './metrics/metrics.component';
import { PredictorComponent } from './predictor/predictor.component';
import { AcquisitorComponent } from './acquisitor/acquisitor.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    // canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  {
    path: 'metrics',
    component: MetricsComponent
  },
  {
    path: 'acquisitor',
    component: AcquisitorComponent
  },
  {
    path: 'predictor',
    //canActivate: [AuthguardGuard],
    component: PredictorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MetricsComponent,
    PredictorComponent,
    AcquisitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
