import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// font awsome
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { FlashMessagesModule } from 'angular2-flash-messages';

// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEquimentComponent } from './components/add-equiment/add-equiment.component';
import { EquimentComponent } from './components/equiment/equiment.component';
import { EditEquimentComponent } from './components/edit-equiment/edit-equiment.component';
import { EquimentDetailsComponent } from './components/equiment-details/equiment-details.component';
// end
import { environment } from '../environments/environment.prod';
// import {environment} from '../environments/environment';
// Service Imports
import { EquimentService } from './services/equiment.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';
import { SettingComponent } from './components/setting/setting.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { RegisterGuard} from './guards/register.guard';
import { AuthGuard} from './guards/auth.guard';

// roots
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent,  canActivate:[RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-equiment', component: AddEquimentComponent,  canActivate:[AuthGuard]},
  { path: 'equiment/:id', component: EquimentDetailsComponent,  canActivate:[AuthGuard] },
  { path: 'edit-equiment/:id', component: EditEquimentComponent,  canActivate:[AuthGuard] },
  { path:'settings', component:SettingComponent },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyA0_Z3vOjCkwNKBFKs_ZLktIUtgV1u9Li4',
  authDomain: 'electronics-control.firebaseapp.com',
  databaseURL: 'https://electronics-control.firebaseio.com',
  projectId: 'electronics-control',
  storageBucket: 'electronics-control.appspot.com',
  messagingSenderId: '733944378366'
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, LoginComponent, RegisterComponent,
    NavbarComponent, SidbarComponent, DashboardComponent, AddEquimentComponent, EquimentComponent,
     EditEquimentComponent, EquimentDetailsComponent, SettingComponent, PageNoFoundComponent],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    EquimentService,
    AuthService,
    RegisterGuard,
    AuthGuard,
    SettingsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
