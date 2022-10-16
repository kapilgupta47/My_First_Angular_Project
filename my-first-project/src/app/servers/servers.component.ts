import { Component, OnInit } from '@angular/core';

@Component({
  selector:'[app-servers],app-servers',
  //selector: 'app-servers',
  templateUrl:'./servers.component.html',
  //---------To write single line of template, add single quote------
  // template: '<app-server></app-server><app-server></app-server>',
  //---------To write multiple line of template, add tidle sign------
  /*template:`<app-server></app-server>
  <hr><hr>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onServerCreate(){
    return this.serverCreationStatus='Server created';
  }
}
