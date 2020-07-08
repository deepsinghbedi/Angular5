import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
trigger('credentials',[
  transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),

    query(':enter', stagger('300ms', [
      animate('.6s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))
    ]), {optional: true}),

    query(':leave', stagger('300ms', [
      animate('.6s ease-in', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
        style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
      ]))
    ]), {optional: true})

  ])
])
  ]
})
export class HomeComponent implements OnInit {

companyDetails: string = 'Welcome to AutoRABIT';  //interpolation
btnName: string = 'Login';                          //property binding

userName: string ;
passWord: string ;

credentials = [];

constructor(private _data: DataService){


}

  ngOnInit(): void {
    this._data.credential.subscribe(res => this.credentials = res);
    this._data.changeCred(this.credentials);

  }

  login(): void{
this.credentials.push(this.userName);
this.credentials.push(this.passWord);
this.userName = '';
this.passWord = '';
this._data.changeCred(this.credentials);
  }

  removeCreds(i): void{
this.credentials.splice(i, 1);
this._data.changeCred(this.credentials);
  }

}
