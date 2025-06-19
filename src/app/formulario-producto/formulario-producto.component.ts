import { ProductoService } from './../producto.service';
import { Producto } from './../producto/producto.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css',
})
export class FormularioProductoComponent {

    descripcionInput: string ='';
    precioInput: number | null = null;


    constructor(private productoService: ProductoService){

    }
  agregarProducto() {
    //Validar que sean valores correcto
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(
      this.descripcionInput,
      this.precioInput
    );
    //Agregamos el nuevo producto usando el servicio
    this.productoService.agregarProducto(producto);
    // Limpiamos los campos del formulario
    this.descripcionInput= '';
    this.precioInput = null;
  }
}
