import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//----------------------------------------------------------------------------------------------------------------------
@Injectable()
export class AdminService
{
  constructor(private http:HttpClient,
              private router:Router) {}
  //
  private apiURL:string = '//data-collector-service-230817.herokuapp.com';
  private auth_token:string = '';

  public response_number:number;
  //====================================================================================================================
  public setToken(token:string) {
    this.auth_token = token;
  }
  //
  public get(type: string){

  return this.http.get(this.apiURL + '/get' + type,{headers:new HttpHeaders({authToken:this.auth_token})})
    .catch((err,obj)=>{return this.error(err,obj);});
  }
  //
  public getWithParams(type:string,data:any={}) {

    let params:string = '?';

      for(let key in data)
        params += key +'='+ data[key]+'&';

    return this.http.get(this.apiURL+'/get' +type +params,
                      {headers:new HttpHeaders({authToken:this.auth_token})})
      .catch((err,obj)=>{return this.error(err,obj);});
  }
  //
  public save(data:any,type:String) {

    return this.http.post(this.apiURL+'/save'+type, data,
                      {headers:new HttpHeaders({authToken:this.auth_token})})
      .catch((err,obj)=>{return this.error(err,obj);});
  }
  //
  public deleteField(label:string) {

    return this.http.delete(this.apiURL+'/deleteField?id='+label,
                        {headers:new HttpHeaders({authToken:this.auth_token})})
      .catch((err,obj)=>{return this.error(err,obj);});
  }
  //
  public logIn(form:any) {
    return this.http.post(this.apiURL+'/login', form)
      .catch((err,obj)=>{return this.error(err,obj);});
  }
  //
  public logOut() {
    return this.http.post(this.apiURL+'/logout',
                        {authToken:this.auth_token})
      .catch((err,obj)=>{return this.error(err,obj);})
      .subscribe(
        ()=>{ this.auth_token = '';}
      );
  }
  //
  error(err:any,obj:any)
  {
    if(err.status === 0) {
      throw(new Error("Service refused"))
    }
    if(err.status.toString().startsWith(4)) {

      if(err.status === 401) {
        this.router.navigateByUrl('login');
        throw(new Error("you are unauthorized"));
      }

      throw(new Error("Unknown Error"));
    }
    else return obj;
  }
  //
  public updateResponseNumber() {
    return this.http.get(this.apiURL+'/getResponseNumber',
                      {headers:new HttpHeaders({authToken:this.auth_token})})
      .subscribe(
        (result)=>{this.response_number = result['number'];}
      );
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
