import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
    listado = {
          descripcion: 'Nuevo Producto' ,
          precio: 100.00
        }
}
