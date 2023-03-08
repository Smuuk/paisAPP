import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = "";
  hayError: boolean= false;
  capitales: Country[] = [];

  constructor(private paisService: PaisService){}


  buscar(termino: string){
    this.hayError=false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe((capis) =>{
      
      console.log(capis);
      this.capitales = capis;
    },(err) =>{
      // console.log('error');
      // console.info(err);
      this.hayError=true;
      this.capitales=[];
    });
  }

}
