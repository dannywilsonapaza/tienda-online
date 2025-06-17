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
  @Output() productoNuevo = new EventEmitter<Producto>();

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;

  agregarProducto() {
    //Validar que sean valores correcto
    if (
      this.descripcionInput.nativeElement.value === '' ||
      this.precioInput == null ||
      this.precioInput.nativeElement <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(
      this.descripcionInput.nativeElement.value,
      this.precioInput.nativeElement.value
    );
    // this.productos.push(producto);
    this.productoNuevo.emit(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
