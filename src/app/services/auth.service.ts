import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from "@angular/fire/auth";
// import {GoogleAuthProvider} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth) { }

  currentUser!: any;

  async login() {
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.currentUser = credential.user;
    // console.log(credential);
    // const token = await credential.user.getIdToken();
    // console.log(token);
  }

  async logout() {
    this.currentUser = null;
    await this.auth.signOut();
    // console.log("logged out");
  }

  alert() {
    alert("LOGIN TO ADD TO CART");
  }

  alertCart() {
    alert("ADD TO CART SUCCESSFULLY");
  }
}
