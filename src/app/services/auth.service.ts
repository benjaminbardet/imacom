import {Injectable, NgZone} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../models/user.models';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone
  ) {
    this.user = null;
  }

  createNewUser(email: string, password: string): any {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['']);
            });
            this.SetUser(result.user);
          }).catch((error) => {
          window.alert(error.message);
        });
      }
    );
  }

  signInUser(email: string, password: string): any {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['']);
            });
            localStorage.setItem('token', result.user.uid);
            this.SetUser(result.user);
          }).catch((error) => {
          window.alert(error.message);
        });
      }
    );
  }

  // tslint:disable-next-line:typedef
  signOutUser() {
    firebase.auth().signOut();
  }

  SetUser(user): void {
    const userData: User = {
      uid: user.uid,
      email: user.email
    };
    localStorage.setItem('token', user.uid);
    this.user = userData;
  }

  getUser(): User {
    return this.user;
  }

}
