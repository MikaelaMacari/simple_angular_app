import {Component, input} from '@angular/core';
import {DataInterface} from '../../models/data.interface';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-countries-card-format',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './countries-card.component.html',
  styleUrl: './countries-card.component.css'
})
export class CountriesCardComponent {
countries = input.required<DataInterface[]>()
}
