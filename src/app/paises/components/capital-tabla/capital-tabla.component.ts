import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html'
})
export class CapitalTablaComponent {
  @Input() capitales: Country[] = [];

}
