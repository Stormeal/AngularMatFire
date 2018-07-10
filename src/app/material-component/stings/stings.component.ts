import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Sting } from './sting';

@Component({
  selector: 'app-stings',
  templateUrl: './stings.component.html',
  styleUrls: ['./stings.component.scss']
})
export class StingsComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  stingsCollection: AngularFirestoreCollection<Sting>;
  stingsObservable: Observable<Sting[]>;

  ngOnInit() {

    // Step 1: Make a reference
    this.stingsCollection = this.afs.collection('stings');

    // Step 2: Get an observable of the data
    this.stingsObservable = this.stingsCollection.valueChanges();

    // Step 3: Subscribing to data can be found in the HTML page.
  }
}
