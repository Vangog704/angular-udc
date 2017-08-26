import { AdminService } from "../../services/admin.service";
import { Component } from '@angular/core'
import { Router } from "@angular/router";

//----------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl:"./login.component.html"
})
export class LoginComponent
{
  constructor(private admin_service:AdminService,
              private router:Router) {}
  //
  public error_message:string ='';
  public password:string;
  public login:string;
  //====================================================================================================================
  public logIn() {
    let form = this.validform();

    if(form === null) return;

    this.admin_service.logIn(form)
      .subscribe(
        (data)=>{
                    this.error_message='';
                    this.admin_service.setToken(data['authToken']);
                    this.router.navigateByUrl("fields");},
                (err)=>{
                    this.error_message = err.message;}
      );
  }
  //
  private validform():any {
    if(this.login !== '' && this.password !== '')
      return {login:this.login,password:this.password};

    this.error_message = "Fill all required fields... Please (it's marked like this: ' * ')";
    return null;
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
