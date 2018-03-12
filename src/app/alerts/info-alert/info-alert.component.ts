import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-alert',
  template: `
    <div class="alert alert-info" role="alert">Info alert</div>
  `,
  styles: [`
    div {
     color: green;
    }
  `]
})
export class InfoAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
