import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Page} from "./page";
import {Dummy} from "./dummy";
import {DummyService} from "./dummy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dummies: Observable<Page<Dummy>> = of()
  search: string = "";
  constructor(private service: DummyService) {
    this.getPage(1)
  }

  getPage(page: number) {
    this.dummies = this.search
      ? this.service.getByName(this.search, page -1, 15)
      : this.service.getAll(page -1, 15)
  }
}
