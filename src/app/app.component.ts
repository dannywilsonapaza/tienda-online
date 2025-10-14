import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Online';
  constructor(private loginService: LoginService){}
  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  salir(){
    this.loginService.logout();
  }
}

