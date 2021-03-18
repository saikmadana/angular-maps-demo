import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = {
    locations: []
  }

  types = {
    LOCATIONS: "locations"
  }

  constructor() { }

  setData(key, value) {
    this.data[key].push(value)
  }

  getData(key) {
    return this.data[key]
  }

}
