import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(url);
  }

}
