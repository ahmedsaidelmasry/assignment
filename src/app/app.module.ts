import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2'

import { AppComponent } from './app.component';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import{RouterModule} from '@angular/router';
import { AuthGuard } from './core/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'home/add',
        component:AddComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      
    ]

    )
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
