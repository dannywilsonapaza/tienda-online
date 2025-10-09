import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Variable para el ID siguiente y unico
  private idSiguiente = 1;

  constructor() {
    this.idSiguiente = this.productos.length + 1;
    this.inicializarProductos();
  }

  private inicializarProductos(){
    const producto1 = new Producto(this.idSiguiente++, 'Pantalón', 130.0);
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 80.0);
    const producto3 = new Producto(this.idSiguiente++, 'Playera', 50.0);
    //Agregar los productos al arreglo
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
  }

  productos: Producto[] = [];


   agregarProducto(producto:Producto){
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    }

    getProductoPorId(id:number):Producto | undefined{
      return this.productos.find(producto => producto.id === id);
    }

}
