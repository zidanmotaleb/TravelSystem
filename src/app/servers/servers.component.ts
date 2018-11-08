import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: ' <app-servers></app-servers>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer: boolean = false;
    serverCreationStatus = 'No server was created!!!';
    serverName= 'Server Name ';
    serverCreated: boolean = false;

  constructor() { }
  ngOnInit() {  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!, Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
