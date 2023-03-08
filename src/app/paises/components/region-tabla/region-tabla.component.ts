import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.scss']
})
export class RegionTablaComponent {
  @Input() region: Country[] = [];

}
