import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Page} from "./page";
import {Dummy} from "./dummy";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number, size: number): Observable<Page<Dummy>> {
    return this.http.get<Page<Dummy>>("http://localhost:8080",
      {
        params: {
          page: page,
          size: size
        }
      })
  }


  getByName(search: string, page: number, size: number): Observable<Page<Dummy>> {
    return this.http.get<Page<Dummy>>("http://localhost:8080/byName/"+search,
      {
        params: {
          page: page,
          size: size
        }
      })
  }
}
