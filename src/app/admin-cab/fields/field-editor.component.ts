import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core"
import { AdminService } from "../../services/admin.service";
import { Field } from "../../classes/field";
import 'rxjs/add/operator/switchMap';

//----------------------------------------------------------------------------------------------------------------------
@Component({
  selector    : 'field-editor',
  templateUrl:'./field-editor.component.html'
})
export class FieldEditorComponent implements OnInit
{
  constructor(private actived_route : ActivatedRoute,
              private admin_service : AdminService,
              private router : Router) {}
  //
  public error_message:string ='';
  public new_item:string='';
  public options:string[]=[];
  public field : Field;
  //====================================================================================================================
  ngOnInit() {
    this.actived_route.paramMap
      .subscribe(
        (result) => {
          let id = result.get('id');

          if(id === 'create_new')
            this.reset();
          else
            this.admin_service.getWithParams("FieldById",{id:id})
              .subscribe(
                (result:Field) => {
                  this.field = result;
                  this.options = result.items;
                  this.typeChange();
                });
        });
  }
  //
  public reset() {
    this.field = new Field();
  }
  //
  public typeChange() {
    if(this.field.type === 'combobox' || this.field.type === 'radio')
      this.field.items = this.options;
    else
      this.field.items = null;
  }
  //
  public addItem(item:string) {
    if(this.new_item !== '') {
      this.options.push(this.new_item);
      this.new_item = '';
    }
  }
  //
  public deleteItem(item:string) {
    this.options.splice(this.field.items.indexOf(item),1);
  }
  //
  private validate() : boolean {
    this.error_message = '';
    if(this.field.label.length < 3) {
        this.error_message += '[Label must be longer than two characters]';
    }
    if(this.field.items !== null && this.field.items.length < 2) {
        this.error_message += '[Options number must be two at least]';
    }
    return this.error_message === '';
  }
  //
  public save() {
    if(this.validate()) {
      var status = '';

      this.admin_service.save(this.field,"Field").subscribe(
        (result:string) => {
                    status = result;
                    this.router.navigateByUrl('fields');},
                (err)=>{
                    console.log(err.message);});
    }
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
