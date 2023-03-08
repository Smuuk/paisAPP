import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    //OBSERVABLE que depende de otro OBSERVABLE
    // this.activateRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.paisService.getPaisPorId(id)
    //       .subscribe(pais => {
    //         // this.pais = pais
    //         // console.log(this.pais);
    //         console.log(pais);
    //         this.pais = pais

    //       });
    //   });

    //OTRA FORMA DE HACER LO DEL OBSERVABLE DEPENDIENTE DE OTRO OBSERVABLE
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);
      console.log("gola");

  }
}
