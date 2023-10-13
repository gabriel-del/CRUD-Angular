import { Injectable } from '@angular/core';
import { HeaderModel } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderModel>({title: 'Início', icon: 'home', routeUrl: '' })

  get headerData(): HeaderModel {
    return this._headerData.value
  } 
  set headerData(headerData: HeaderModel) {
    this._headerData.next(headerData)
  }
}
