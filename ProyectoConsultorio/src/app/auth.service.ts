import { Injectable, inject } from '@angular/core';
import { Auth, signOut} from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BehaviorSubject,from, Observable } from 'rxjs';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firestore = inject(Firestore);
  firebaseAuth = inject(Auth);


  // Verifica si el usuario ha iniciado sesión
  private isLoginSubject = new BehaviorSubject<boolean>(this.firebaseAuth.currentUser !== null);
  isLogin$ = this.isLoginSubject.asObservable();

  // Verifica si el usuario es administrador
  async isAdmin(): Promise<boolean> {
    const currentUser = this.firebaseAuth.currentUser;
    if (currentUser) {
      const userDocRef = doc(this.firestore, `Usuario/${currentUser.uid}`);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        return userData['admin'] === true;
      }
    }
    return false;
  }


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
