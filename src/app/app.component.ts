import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from './services/data.service';
import {DataInterface} from './models/data.interface';
import {finalize} from 'rxjs';
import {CountriesComponent} from './components/countries/countries.component';
import {CountriesCardComponent} from './components/countries-cards/countries-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesComponent, CountriesCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataService =  inject(DataService)
  data: DataInterface[] = [];
  public loading = signal<boolean>(false)



  getCountries() {
    this.loading.set(true);
    this.dataService.getData().pipe(
      finalize(() => this.loading.set(false)
    )).subscribe(
      response => {  // next callback
        this.data = response;
      },
      error => {  // error callback
        console.error('There was an error!', error);
      }
    )
  }
}
