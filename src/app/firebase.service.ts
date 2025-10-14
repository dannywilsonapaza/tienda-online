import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
  apiKey: "AIzaSyDvifuNmWmQV5fqQ7nYmsBAH4lKoXmeI-Q",
  authDomain: "tienda-online-549bb.firebaseapp.com",
  databaseURL: "https://tienda-online-549bb-default-rtdb.firebaseio.com",
  projectId: "tienda-online-549bb",
  storageBucket: "tienda-online-549bb.firebasestorage.app",
  messagingSenderId: "467274790389",
  appId: "1:467274790389:web:8193695743821798539cbc"
};

public auth: Auth;
public firebase: Firestore;
  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
   }
}
