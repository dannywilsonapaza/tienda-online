import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate {

  constructor(private loginService: LoginService,
    private router: Router

  ) { }

  //Verificar si el usuario está autenticado antes de activar la ruta
  canActivate(): boolean {
    if (this.loginService.isAutenticado()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
