import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataInterface} from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(this.apiUrl);
  }
}
