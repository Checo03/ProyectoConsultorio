import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCd9NShsT5EUkNuD6aUgOVQkH1f4d5Q5QY",
  authDomain: "inventario-5b460.firebaseapp.com",
  projectId: "inventario-5b460",
  storageBucket: "inventario-5b460.appspot.com",
  messagingSenderId: "708318473872",
  appId: "1:708318473872:web:958fbc0303d29250ae3215",
  measurementId: "G-67FDJ59YSH"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
