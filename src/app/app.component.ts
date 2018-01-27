import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {NgForm} from'@angular/forms';
import { NgModel } from '@angular/forms';
import {} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* courses: any[];
  constructor(db:AngularFireDatabase){
    db.list('/assignment')
    .subscribe(assignment =>{
      this.courses=assignment;
      console.log(this.courses);
    });
  }*/
  title = 'app';
}
