import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]: Producto} = {};
  // Observable para notificar cambios en la lista de productos
  productosActualizados = new Subject<{[llave:string]: Producto}>();


  constructor(private datosService: DatosService) {

  }
  listarProductos(){
    return this.datosService.listarProductos();
  }

  //Agregar o modificar un producto
   guardarProducto(producto:Producto, llave:string | null = null):void{
    if(llave === null){
      //Agregar nuevo producto
      this.datosService.guardarProducto(producto).subscribe(() =>{
       this.refrescarProductos();
      });
    }
  }

  private refrescarProductos():void{
    this.listarProductos().subscribe(( productos: {[llave:string]: Producto}) =>{
      this.setProductos(productos);
    });
  }

  setProductos( productos: {[llave:string]: Producto}):void{
    this.productos = productos;
    this.productosActualizados.next(this.productos);// emitir la actualización de la lista
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
