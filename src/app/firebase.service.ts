import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);

    if (environment.useEmulators) {
      connectAuthEmulator(this.auth, environment.emulators.authHost, {
        disableWarnings: true
      });
    }
  }
}
