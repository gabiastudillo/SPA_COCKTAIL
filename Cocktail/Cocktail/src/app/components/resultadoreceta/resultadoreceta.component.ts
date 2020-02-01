import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService, Receta } from '../../services/recetas.service';

@Component({
  selector: 'app-resultadoreceta',
  templateUrl: './resultadoreceta.component.html'
})
export class ResultadorecetaComponent implements OnInit {

  recetas:Receta [] = [];
  termino:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _recetasService: RecetasService
    ) { }

ngOnInit() {
  this.activatedRoute.params.subscribe( params => {
    // console.log("parametro de busqueda recibido: " + params['termino'] );
    this.recetas = this._recetasService.buscarRecetas(params['termino'] );

    // para llegar una variable que devuelve a la vista el termino buscado
    this.termino = params['termino'];
  });

}

}
