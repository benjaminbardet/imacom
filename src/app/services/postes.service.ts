import { Injectable } from '@angular/core';
import { Poste } from '../models/poste.model';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import DataSnapshotA = firebase.database.DataSnapshot;
import {Subject} from 'rxjs';

@Injectable()
export class PostesService {

  Postes: Poste[] = [];
  PostesSubject = new Subject<Poste[]>();

  PostesUser: Poste[] = [];
  PostesSubjectUser = new Subject<Poste[]>();

  emitPostes(): void {
    this.PostesSubject.next(this.Postes);
  }

  emitPostesUser(): void {
    this.PostesSubjectUser.next(this.PostesUser);
  }

  savePostes(): void {
    firebase.database().ref('/postes').update(this.Postes);
    firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes/' + (this.Postes.length - 1)).set(this.Postes[this.Postes.length - 1]);
  }

  getPostes(): void {
    firebase.database().ref('/postes')
      .on('value', (data: DataSnapshotA) => {
          this.Postes = data.val() ? data.val() : [];
          this.emitPostes();
        }
      );
  }

  getPostesUser(): void {
    firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes')
      .on('value', (data: DataSnapshotA) => {
          this.PostesUser = data.val() ? data.val() : [];
          this.emitPostesUser();
          this.PostesUser = this.PostesUser.filter((el) => {
            return el !== undefined;
          });
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
    this.getPostes();
    this.getPostesUser();
  }

  uploadFile(file: File): any {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref().child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }

}
