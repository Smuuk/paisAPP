import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 10px;
    margin-bottom: 10px;
  }
  `
  ]
})
export class PorRegionComponent {
  constructor(private paisService: PaisService){}


  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  region: Country[] = [];


  
  getClassCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }


  buscarYActivar(termino: string){
    if(termino === this.regionActiva){return};
    this.regionActiva = termino;
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe((regionesObtenidas) =>{
      
      console.log(regionesObtenidas);
      this.region = regionesObtenidas;
    });
  }
}
