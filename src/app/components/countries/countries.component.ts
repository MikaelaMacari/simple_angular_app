import {Component, input} from '@angular/core';
import {DataInterface} from '../../models/data.interface';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
countries = input.required<DataInterface[]>()
}
