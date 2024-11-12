import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from './services/data.service';
import {DataInterface} from './models/data.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataService =  inject(DataService)
  data: DataInterface[] = [];
  showData: boolean = false;


  fetchData() {
    this.dataService.getData().subscribe(response => {
      console.log(response)
      this.data = response;
      this.showData = true;
    });
  }
}
