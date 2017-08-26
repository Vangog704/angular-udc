import { Component, OnInit } from '@angular/core'
import { AdminService } from "../../services/admin.service";
import { Field } from "../../classes/field"

//----------------------------------------------------------------------------------------------------------------------
@Component ({
  selector    : 'field-list',
  templateUrl : './field-list.component.html'
})
export class FieldListComponent implements OnInit
{
  constructor(private admin_service : AdminService) {}
  //
  public error_message:string='';
  public fields : Field[] = [];
  //====================================================================================================================
  public delete(label:string) {
    this.admin_service.deleteField(label)
      .subscribe(
        (result)=> {
                    this.ngOnInit();},
                (err)=>{
                    console.log(err.message);}
        );
  }
  //
  ngOnInit(): void {
    this.admin_service.get("Fields")
      .subscribe(
        (result:Field[]) => {
                    this.error_message='';
                    this.fields = result;},
                (err)=>{
                    this.error_message = err.message;}
        );
  }
}
