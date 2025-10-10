import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {path:'', component: ListadoProductosComponent},
  {path:'listado', component: ListadoProductosComponent},
  {path:'agregar', component: FormularioProductoComponent},
  {path:'editar/:id', component: FormularioProductoComponent},
  //Ruta comodin para cualquier otra ruta no definida
  {path:'**', component: ErrorComponent}

];
