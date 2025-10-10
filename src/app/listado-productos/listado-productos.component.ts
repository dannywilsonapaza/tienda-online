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

  productos: {[llave:string]: Producto} = {};

  constructor(private productoService: ProductoService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.cargarProductos();

  }

  cargarProductos() {
    this.productoService.listarProductos()
      .subscribe(( productos: {[llave:string]: Producto}) => {
        this.productos = productos;
        console.log(this.productos);
      });
  }
  obtenerLlaves(): string[] {
    if (this.productos) {
      return Object.keys(this.productos);

    }
    return [];
}

  agregarProducto(){
    this.router.navigate(['/agregar']);
  }
}
