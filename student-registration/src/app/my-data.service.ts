import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

   constructor(private http: Http) { 

  }

   success(){
    return "success";
  }
}
