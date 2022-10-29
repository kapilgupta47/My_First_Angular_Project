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
  serverName = 'Kapil';
  firstName='';
  lastName='';
  username='';
  words=0;
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];
  showSecret = false;
  log = [];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated=true;
    this.servers.push(this.serverName); //push the user defined list other than two
    return this.serverCreationStatus='Server created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
  // wordCounter(username:any){
  //   var words = username.split("").length;
  //   return words;
  // }
  charLimit(){
    return this.username.length;
  }

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
   // this.log.push(this.log.length+1); //strict mode:off; otherwise log:number[]=[];
   this.log.push(new Date());
  }
}
