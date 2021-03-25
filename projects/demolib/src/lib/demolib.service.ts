import { Injectable } from '@angular/core';
import { employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class DemolibService {

  constructor() { }

  getEmployees():employee[] {
    return [
      {id: 1, name: "name1", age: 20, gender: "male"},
      {id: 2, name: "name2", age: 18, gender: "female"},
      {id: 3, name: "name3", age: 21, gender: "male"},
    ]
  }
}
