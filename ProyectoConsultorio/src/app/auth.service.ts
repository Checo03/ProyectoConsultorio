import { Injectable, inject } from '@angular/core';
import { Auth, signOut} from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BehaviorSubject,from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);


  //Verifica Si el usuario inicio sesion
 
  private isLoginSubject = new BehaviorSubject<boolean>(this.firebaseAuth.currentUser !== null);
  isLogin$ = this.isLoginSubject.asObservable();


  //Metodo Para Iniciar Sesion

  login(email:string, password:string): Observable<void>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth, email, password
    ).then(() => { this.isLoginSubject.next(true); });
    return from(promise);
  }

  //Metodo Para Cerrar Sesion
  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {  this.isLoginSubject.next(false);});
    return from(promise);
  }

}
