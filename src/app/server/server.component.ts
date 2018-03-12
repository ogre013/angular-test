import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  private serverId = 20;
  private serverName = 'Test1';


  constructor() { }

  ngOnInit() {
  }

}
