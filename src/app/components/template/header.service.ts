import { Injectable } from '@angular/core';
import { Header } from './header.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<Header>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): Header {
    return this._headerData.value
  } 
  set headerData(headerData: Header) {
    this._headerData.next(headerData)
  }
}
