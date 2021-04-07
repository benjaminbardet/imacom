import { Injectable } from '@angular/core';
import { Poste } from '../models/poste.model';
import firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshotA = firebase.database.DataSnapshot;
import {Subject} from 'rxjs';

@Injectable()
export class PostesService {

  Postes: Poste[] = [];
  PostesSubject = new Subject<Poste[]>();

  emitPostes(): void {
    this.PostesSubject.next(this.Postes);
  }

  savePostes(): void {
    firebase.database().ref('/postes').set(this.Postes);
  }

  getPostes(): void {
    firebase.database().ref('/postes')
      .on('value', (data: DataSnapshotA) => {
          this.Postes = data.val() ? data.val() : [];
          this.emitPostes();
        }
      );
  }

  getSinglePoste(id: number): Promise<Poste> {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/postes/' + id).once('value').then(
          (data: DataSnapshotA) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPoste(newPoste: Poste): void {
    this.Postes.push(newPoste);
    this.savePostes();
    this.emitPostes();
  }

  removePostes(poste: Poste): void {
    const posteIndexToRemove = this.Postes.findIndex(
      (posteEl) => {
        if (posteEl === poste) {
          return true;
        }
      }
    );
    this.Postes.splice(posteIndexToRemove, 1);
    this.savePostes();
    this.emitPostes();
  }


  constructor() {
    // this.getPostes();
  }

}
