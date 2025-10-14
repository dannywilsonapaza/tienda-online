import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardianService } from './login-guardian.service';

export const routes: Routes = [
  {path:'', component: ListadoProductosComponent, canActivate: [LoginGuardianService]},
  {path:'listado', component: ListadoProductosComponent, canActivate: [LoginGuardianService]},
  {path:'agregar', component: FormularioProductoComponent, canActivate: [LoginGuardianService]},
  {path:'editar/:llave', component: FormularioProductoComponent, canActivate: [LoginGuardianService]},
  {path:'login', component: LoginComponent},
  //Ruta comodin para cualquier otra ruta no definida
  {path:'**', component: ErrorComponent}

];
