import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: Producto[] = [];
  //  productos: Producto[] = [
  //     new Producto('Pantalón', 130.0),
  //     new Producto('Camisa', 80.0),
  //     new Producto('Playera', 50.0)
  //   ];

  //  agregarProducto(producto:Producto){
  //     this.productos.push(producto);
  //   }

  constructor(private productoService: ProductoService) {
    this.productoService.detalleProductoEmitter.subscribe(
      (detalleProducto: Producto) =>
        alert(
          `Producto: $${detalleProducto.descripcion}, $${detalleProducto.precio}`
        )
    );
  }

  ngOnInit() {
    //Inicializar los productos
    this.productos = this.productoService.productos;
  }
}
