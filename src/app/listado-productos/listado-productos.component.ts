import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0)
  ];
  
  descripcionInput: string = '';
  precionInput: number | null = null;

  agregarProducto(){
    //Validar que sean valores correcto
    if(this.descripcionInput.trim() === '' || this.precionInput == null || this.precionInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precionInput);
    this.productos.push(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precionInput = null;
  }

}
