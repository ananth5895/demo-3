import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
 
@Input() parentData! : string;

  ngOnInit(): void {
  }
   myfincton(a:any,b:any){
    return a+b;
  }

}
