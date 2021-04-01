import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imacon';
  constructor() {
    const config = {
      apiKey: 'AIzaSyCCUi3YyILD9iMxI86VR3UXFXPfEy32440',
      authDomain: 'imacomdotcom.firebaseapp.com',
      projectId: 'imacomdotcom',
      storageBucket: 'imacomdotcom.appspot.com',
      messagingSenderId: '232411724720',
      appId: '1:232411724720:web:f577fd9d0903b5e42b3475'
    };
    firebase.initializeApp(config);
  }
}
