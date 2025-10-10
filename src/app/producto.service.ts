import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]: Producto} = {};

  constructor(private datosService: DatosService) {

  }
  listarProductos(){
    return this.datosService.listarProductos();
  }

  //Agregar o modificar un producto
   guardarProducto(producto:Producto){
    //  if(producto.id === null){
    //    //Agregar nuevo producto
    //    producto.id = this.idSiguiente++;
    //    this.productos.push(producto);
    //  }else{
    //    //Modificar producto existente
    //    const indice = this.productos.findIndex(p => p.id === producto.id);
    //    if(indice !== -1){
    //      this.productos[indice] = producto;
    //    }
    //  }
   }

    getProductoPorllave(llave:string):Producto | undefined{
      return undefined;
      // return this.productos.find(producto => producto.id === id);
    }

    eliminarProducto(llave:string):void{
      // const indice = this.productos.findIndex(p => p.id === id);
      // if(indice !== -1){
      //   this.productos.splice(indice, 1);
      // }
    }

}
