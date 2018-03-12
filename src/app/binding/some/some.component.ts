import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  /*username = '';
  someStatus = false;
  texts = ['this', 'is', 'bad'];

  constructor() { }



  /!*clearInput() {
    this.username = '';
  }

  testMethod(): string {
    const t = this.username;
    console.log(t);
    return t;
  }*!/

  changeStatus() {
    this.someStatus = !this.someStatus;
    return this.someStatus;
  }

  add() {
    this.texts.push('rrr');
  }

  remove() {
    this.texts.pop();
  }

  indicatorColor(): string {
    return this.texts && this.texts.length > 0 ? 'green' : 'red';
  }

  indicatorText(): boolean {
    return !(this.texts && this.texts.length > 0);
  }*/


 // displayP = false;
  timeStamps = new Array<Date>();
  ngOnInit() {
  }

  updateStatusP() {
   // this.displayP = !this.displayP;
    this.timeStamps.push(new Date());

  }

  setBackgroundColor(index: number): string {
    return this.checkCountTimeStamps(index) ? 'blue' : 'white';
  }

  checkCountTimeStamps(index: number): boolean {
    return (index + 1) % 5 === 0;
  }

}
