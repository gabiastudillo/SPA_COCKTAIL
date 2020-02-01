import { Component, OnInit } from '@angular/core';
import { RecetasService, Receta } from '../../services/recetas.service';
/* Este import sirve para hacer funcionar
  la navegación entre páginas a través de la programación*/
  import { Router } from '@angular/router';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html'
})
export class RecetasComponent implements OnInit {
  /* Cuando se inicializa el componente se declara esta variable de tipo Interface Heroe (vacia porque se mandara
  a llenar dentro de la  función de inicio ngOnInit() ) */
  recetas:Receta [] = [];

  // Se necestia creaer una variable tipo privada que sea de tipo Router (el servicio que importamos)
  constructor( private _recetasService: RecetasService, private router:Router ) {
  }

  ngOnInit() {
    this.recetas = this._recetasService.getRecetas();
  }

  // Función de navegación entre páginas de la vista
  // La función requiere el index del item para enviarlo a la ruta de navegación
  verReceta( idx:number ) {
    this.router.navigate( ['/cocktail', idx] );
  }
}