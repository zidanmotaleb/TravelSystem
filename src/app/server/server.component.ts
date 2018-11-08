import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent{
  serverId = 10;
  serverStatus = 'offline';

  titel = 'Mr.';
  name = 'Mohammed';
  show: boolean  = false;


  getServerStatus(){
    return this.serverStatus;
  }
  getTitel(){
    return this.titel;
  }
   getName(){
     return this.name;
   }

showBtn(){
  this.show= true;
}
}
