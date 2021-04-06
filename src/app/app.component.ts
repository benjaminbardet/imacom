import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'imacon';
  isAuth = false;
  constructor(private authService: AuthService) {
    const config = {
      apiKey: 'AIzaSyCCUi3YyILD9iMxI86VR3UXFXPfEy32440',
      authDomain: 'imacomdotcom.firebaseapp.com',
      databaseURL: 'https://imacomdotcom-default-rtdb.europe-west1.firebasedatabase.app/',
      projectId: 'imacomdotcom',
      storageBucket: 'imacomdotcom.appspot.com',
      messagingSenderId: '232411724720',
      appId: '1:232411724720:web:f577fd9d0903b5e42b3475'
    };
    firebase.initializeApp(config);
  }


  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut(): void {
    this.authService.signOutUser();
  }
}
