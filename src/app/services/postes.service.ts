import { Injectable } from '@angular/core';
import { Poste } from '../models/poste.model';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import DataSnapshotA = firebase.database.DataSnapshot;
import { Subject } from 'rxjs';

@Injectable()
export class PostesService {

  Postes: Poste[] = [];
  PostesSubject = new Subject<Poste[]>();

  PostesUser: Poste[] = [];
  PostesSubjectUser = new Subject<Poste[]>();

  emitPostes(): void {
    this.PostesSubject.next(this.Postes.slice());
  }

  emitPostesUser(): void {
    this.PostesSubjectUser.next(this.PostesUser);
  }

  savePostes(): void {
    firebase.database().ref('/postes').update(this.Postes);
    firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes/' + (this.Postes.length - 1)).set(this.Postes[this.Postes.length - 1]);
  }

  likePostes(): void {
    firebase.database().ref('/users/' + localStorage.getItem('token') + '/likes/' + (this.Postes.length - 1)).set(this.Postes[this.Postes.length - 1]);
  }

  getPostes(): void {
    firebase.database().ref('/postes')
      .on('value', (data: DataSnapshotA) => {
          this.Postes = data.val() ? data.val() : [];
          const list = [];
          for (let i = 0; i < this.Postes.length; i++) {
            if (this.Postes[i] === undefined) {
              list.push(i);
              console.log(i);
            } else {
              this.Postes[i].id = i;
            }
          }
          for (let i = 0; i < list.length; i++) {
            this.Postes.splice(list[i], 1);
          }
          console.log('popo', this.Postes);

          this.emitPostes();
        }
      );
  }

  getPostesUser(): void {
    firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes')
      .on('value', (data: DataSnapshotA) => {
        this.PostesUser = data.val() ? data.val() : [];
        console.log('data :', data.val());
        const IDs = Object.keys(this.PostesUser);
        this.PostesUser = Object.keys(this.PostesUser).map(key => {
          return this.PostesUser[key];
        });

        for (let i = 0; i < this.PostesUser.length; i++) {
          this.PostesUser[i].idGallery = parseInt(IDs[i], 10);
          console.log('postes Users: ', this.PostesUser[i]);
        }
        console.log('IDs :', IDs);
        this.emitPostesUser();
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

  removePoste(poste: Poste): void {
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

  recherche(titre: string): void {
    for (const poste of this.Postes){
      if (poste.title.includes(titre) || titre === null || titre === ''){
        poste.recherche = true;
        console.log('true' + poste.title);
      }
      else {
        poste.recherche = false;
        console.log('false ' + poste.title);
      }
    }
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

  deletePost(poste: Poste) {
    console.log("AAA : " + poste.id)
    let id = poste.id; 
    console.log('&&&&&&&&&&&&&&&&&', poste);
    if(poste.image) {
      // firebase.database().ref('postes/' + id ).remove();
      // firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes/' + id ).remove(); // idGallery
    //   const storageRef = firebase.storage().refFromURL(poste.image);
    //   storageRef.delete().then(
    //     () => {
    //       console.log('image removed');
    //     },
    //     (error) => {
    //       console.log('Could not remove image : ' + error);
    //     }
    //   );
    // }
    // const bookIndexToRemove = this.Postes.findIndex(
    //   (bookEl) => {
    //     if(bookEl === poste) {
    //       return true;
    //     }
    //   }
    // );
    }
    // this.Postes.splice(bookIndexToRemove, 1);
    this.savePostes();
    this.emitPostes();
  }


  getPoste(titre: string): Poste {
    let res = null;
    for (const poste of this.PostesUser){
      if (poste.title === titre) {
        res = poste;
        break;
      }
    }
    return res;
  }

  updatePoste(poste: Poste, titre: string, id: number): void {
    console.log(poste.title);
    for (const p of this.Postes){
      console.log(p.image);
      if (p.title === titre) {
        console.log('///////////////////////////////////////////////////////////////////////////////////////////////////////////////');
        p.title = poste.title;
        p.description = poste.description;
        p.categorie = poste.categorie;
        p.pays = poste.pays;
        firebase.database().ref('/users/' + localStorage.getItem('token') + '/postes/' + id).set(p);
        break;
      }
    }

    this.savePostes();
    this.emitPostes();
  }
}
