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
      this.datosService.agregarProducto(producto).subscribe(() =>{
       this.refrescarProductos();
      });
    } else {
      //Modificar producto existente
      this.datosService.modificarProducto(producto, llave).subscribe(() =>{
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
      return this.productos[llave];

    }

    eliminarProducto(llave:string):void{
      this.datosService.eliminarProducto(llave).subscribe(() =>{
        this.refrescarProductos();
      });
  
    }

}
