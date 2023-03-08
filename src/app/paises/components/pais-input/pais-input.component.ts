import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string= '';

  termino: string = '';
  debouncer: Subject<string> = new Subject();
  buscar() {
    this.onEnter.emit(this.termino);
  }
  //LA DE ABAJO ES UNA FORMA PARA OBTENER LO QUE TECLEAMOS, FUNCIONA SI MANDAMOS EL "$event" en el html
  // teclaPresionada(event: any){
  //   const valor = event.target.value;
  //   console.log(valor);

  //   console.log(this.termino);
  // }


  //ESTA ES LA FORMA QUE NOS ACONSEJA
  teclaPresionada(){
    this.debouncer.next(this.termino);  
  }

}
