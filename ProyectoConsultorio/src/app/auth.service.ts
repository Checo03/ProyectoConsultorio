import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);


  //Metodo Para Iniciar Sesion

  login(email:string, password:string): Observable<void>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth, email, password
    ).then(() => {});
    return from(promise);
  }

}
