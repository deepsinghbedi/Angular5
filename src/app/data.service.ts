import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private credentials = new BehaviorSubject<any>(['first LI', 'second LI']);
  credential = this.credentials.asObservable();

  constructor() { }

  changeCred(credential): void{
    this.credentials.next(credential);

  }

}
