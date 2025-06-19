import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  descripcion = 'Nuevo Producto';
  precio = 100.00;

  @Input() detalleProducto!:Producto;

  constructor(private productoService: ProductoService){

  }

  emitirDetalleProducto(){
    this.productoService.detalleProductoEmitter.emit(this.detalleProducto);
  }
}
