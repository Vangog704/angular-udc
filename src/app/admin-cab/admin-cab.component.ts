import { Component } from '@angular/core'
import {AdminService} from "../services/admin.service";

//----------------------------------------------------------------------------------------------------------------------
@Component ({
  selector: "admin_cab_headrer",
  template: '<nav>\n' +
            '  <h3>\n' +
            '    <a routerLink="/" (click)="logOut()" routerLinkActive="active"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Form</a>' +
            '    <a routerLink="/fields" routerLinkActive="active"><span class="glyphicon glyphicon-list" aria-hidden="true"></span> Fields</a>\n' +
            '    <a routerLink="/responses" routerLinkActive="active"><span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span> Responses <span class="badge">{{admin_service.response_number}}</span></a>\n' +
            '  </h3>\n' +
            '</nav>'
})
export class AdminCabHeaderComponent {
  constructor(public admin_service:AdminService){
    this.admin_service.updateResponseNumber();
  }

  public logOut() {
    this.admin_service.logOut();
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
