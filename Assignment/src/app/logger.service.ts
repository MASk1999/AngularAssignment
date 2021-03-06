import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { item } from './items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private _http:HttpClient) { } 

  getData():Observable<item []>{
  	return this._http.get<item []>('https://digitebl-staging.herokuapp.com/api/v1/common/getItemCategories');
  }
}