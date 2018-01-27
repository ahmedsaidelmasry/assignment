import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
interface Car {
  Brand: string;
  Country:string;
  Year:string;
  Iamgeurl:string;
}
interface CarId extends Car { 
  id: string; 
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  carCol: AngularFirestoreCollection<Car>;
  //cars: Observable<Car[]>;
cars:any;
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.carCol = this.afs.collection('cars');
    this.cars = this.carCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Car;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
   // this.cars = this.carCol.valueChanges();
  }
  deleteCar(carId){
    this.afs.doc('cars/'+carId).delete();
  }

}
