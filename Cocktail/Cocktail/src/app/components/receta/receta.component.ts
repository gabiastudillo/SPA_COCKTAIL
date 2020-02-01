import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html'
})
export class RecetaComponent {

  receta:any = {};

  constructor( private activatedRoute: ActivatedRoute, private _recetasService: RecetasService, private _sanitizer: DomSanitizer) {
      this.activatedRoute.params.subscribe( params => {
      this.receta = this._recetasService.getReceta(params['id'] );
      this.receta.casa = this.getCasa(this.receta.casa);
    });
  }

  goToSpecificUrl(url): void {
    window.open(url);
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
    }

  getCasa(casa: string) {
    if(casa === "DC") {
      return "assets/img/dc.png";
    } else {
      return "assets/img/marvel.png";
    }
  }

}
