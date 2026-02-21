import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';
import { LoginService } from './login.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private readonly projectId = environment.firebaseConfig.projectId;
  private readonly databaseURL = environment.firebaseConfig.databaseURL;
  private readonly databaseHost = environment.emulators.databaseHost;

  constructor(private httpClient: HttpClient,
    private loginService: LoginService
  ) {

   }

    listarProductos():Observable<{[llave:string]: Producto}>{
      const token = this.loginService.getIdToken();
      const url_listar = this.buildUrl('datos', token);
      return this.httpClient.get<{[llave:string]: Producto}>(url_listar);
    }

    agregarProducto(producto:Producto):Observable<any>{
      const token = this.loginService.getIdToken();
      //Aqui se generra una llave unica en firebase
      const url_agregar = this.buildUrl('datos', token);
      return this.httpClient.post(url_agregar, producto);
    }

    modificarProducto(producto:Producto, llave:string):Observable<any>{
      const token = this.loginService.getIdToken();
      const url_modificar = this.buildUrl(`datos/${llave}`, token);
      return this.httpClient.put(url_modificar, producto);
    }
    eliminarProducto(llave:string):Observable<any>{
      const token = this.loginService.getIdToken();
      const url_eliminar = this.buildUrl(`datos/${llave}`, token);
      return this.httpClient.delete(url_eliminar);
    }

    private buildUrl(path: string, token: string | null): string {
      if (environment.useEmulators) {
        const authQuery = token ? `&auth=${token}` : '';
        return `${this.databaseHost}/${path}.json?ns=${this.projectId}${authQuery}`;
      }

      const authQuery = token ? `?auth=${token}` : '';
      return `${this.databaseURL}/${path}.json${authQuery}`;
    }
}
