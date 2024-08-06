import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
    "projectId":"firstprject-aaa4d",
    "appId":"1:824574935965:web:985edbe74152e76bd02574",
    "storageBucket":"firstprject-aaa4d.appspot.com",
    "apiKey":"AIzaSyCgc5FUTbDCULxhSzAKOIzpo_qaPC48-zM",
    "authDomain":"firstprject-aaa4d.firebaseapp.com",
    "messagingSenderId":"824574935965"})), provideAuth(() => getAuth())]
};
