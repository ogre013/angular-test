import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="alert alert-success" role="alert">Success message</div>
  `,
  styles: [`
  div {
      color: brown;
    }
    `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
