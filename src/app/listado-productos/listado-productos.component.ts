import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService,
    private router: Router
  ) {

  }

  ngOnInit() {
    //Inicializar los productos
    this.productos = this.productoService.productos;

  }

  agregarProducto(){
    this.router.navigate(['/agregar']);
  }
}
