import { Component,
         OnDestroy,
         OnInit  } from '@angular/core'

import { AdminService } from "../../services/admin.service"

//----------------------------------------------------------------------------------------------------------------------
@Component ({
  selector    : 'response-list',
  templateUrl : './response-list.component.html'
})
export class ResponseListComponent implements OnDestroy,OnInit
{
  constructor(private admin_service : AdminService) {}
  //
  public field_names  : string[] = [];
  public table_data   : any[] = [];
  public error_message:string='';
  private ws:WebSocket;
  //====================================================================================================================
  ngOnInit(): void {
    this.admin_service.get("FieldNames")
      .subscribe(
      (result:string[]) => {
                  this.error_message='';
                  this.field_names = result;},
              (err)=>{
                  this.error_message=err.message;}
      );
    this.admin_service.get("UserData")
      .subscribe(
      (result:any[]) => {
                  this.error_message='';
                  this.table_data = result;
                  this.openSocket();},
              (err)=>{
                  this.error_message=err.message;}
      );
  }
  //
  ngOnDestroy(): void {
    if(this.ws !== undefined)
      this.ws.close();
  }
  //
  private openSocket() {
    this.ws = new WebSocket('ws://data-collector-service-230817.herokuapp.com/ws');

    this.ws.onmessage = (message: MessageEvent)=>{
                          this.table_data.push(JSON.parse(message.data));
                          this.admin_service.response_number++;
                        };

    this.ws.onopen = ()=> { console.log('[WebSocket is Opened...]');};
    this.ws.onclose = ()=> { console.log('[WebSocket is Closed...]');};
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
