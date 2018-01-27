import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
interface country{
  country:string;
}*/
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Brand: string;
  Country:string;
  Year:string;
  IamgeUrl:string;
/*
  postsCol: AngularFirestoreCollection<country>;
  posts: any;*/
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    /*
    this.postsCol = this.afs.collection('Country');
    this.posts = this.postsCol.valueChanges();
    

    this.postsCol = this.afs.collection('cars');
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as country;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });*/
  }
  addcar(){
    this.afs.collection('cars').add({'Brand':this.Brand,'IamgeUrl':this.IamgeUrl,'Year':this.Year,'Country':this.Country});

  }
}
