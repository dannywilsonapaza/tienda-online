import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { Router } from '@angular/router';


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

  @Input() producto!:Producto;

  constructor(private router: Router){

  }

  editarProducto(id:number){
    //Pasamos el id en la url
    this.router.navigate(['/editar', id]);
  }
}
