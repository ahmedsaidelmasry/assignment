import { Component, OnInit } from '@angular/core';
import {NgModel, NgForm, ReactiveFormsModule} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{Router} from '@angular/router';
interface User{
 userName:string;
 Password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCol: AngularFirestoreCollection<User>;
  user: any;
  check:boolean;
  constructor(private afs: AngularFirestore,private router:Router) { }

  ngOnInit() {
    /*this.userCol = this.afs.collection('User');
    this.user = this.userCol.valueChanges();
   // this.user.subscribe();
  */

  }
  onsubmit(userName,Password){
    if(userName==' intern@theelephant.tech' && Password=='thisIsSecure'){
      this.check=true;
    }
    else{
      this.check=false;
    }
  }
}
