import { ComponentFactoryResolver,AfterViewInit,
         Component,ViewChild} from "@angular/core";

import { SimpletextComponent,MultitextComponent,
         ComboboxComponent,CheckboxComponent,
         RadioComponent,FieldDirective,
         DateComponent,FieldItem } from "./custom-fields.components";

import { FieldComponent} from "./field.component";
import { AdminService} from "../services/admin.service";
import { Router } from "@angular/router";
import { Field } from "../classes/field";
//----------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'field-list',
  templateUrl: './collector-field-list.component.html',
})
export class CollectorFieldListComponent implements AfterViewInit
{
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private admin_service:AdminService,
              private router:Router){}
  //
  @ViewChild(FieldDirective) fieldHost: FieldDirective;
  private instance_list:FieldComponent[]=[];
  public error_message:string = '';
  public ready:boolean = false;
  //====================================================================================================================
  public collect() {
    let data:any = {};
    this.ready = false;
    this.error_message = '';
    for(let instance of this.instance_list)
    {
      if(instance.data.required && instance.data.value === ''){
        this.error_message = 'Some required fields is empty';
        this.ready = true;
        return;
      }
      data[instance.data.name] = instance.data.value;
    }
    this.admin_service.save(data, "UserData").subscribe(()=>{ this.router.navigateByUrl('congratulation')});
  }
  //
  public reset()
  {
    this.ready = false;
    this.instance_list = [];
    this.fieldHost.viewContainerRef.clear();
    this.ngAfterViewInit();
  }
  //
  ngAfterViewInit(): void {
    this.admin_service.get("ActiveFields")
      .subscribe(
        (fields:Field[]) =>{
                    this.error_message='';
                    let instance;

                    for(let field_item of this.createItems(fields)) {
                      instance = <FieldComponent>this.fieldHost.viewContainerRef
                        .createComponent(
                            this.componentFactoryResolver.resolveComponentFactory(field_item.component))
                              .instance;
                      instance.data = field_item.data;
                      this.instance_list.push(instance);
                    }
                    if(this.instance_list.length > 0)
                      this.ready = true;
                    else
                      this.error_message = 'No fields for filling';},
                (err)=>{this.error_message = err.message;}
      );
  }
  //
  public createItems(fields:Field[]) {
    let items:any = [];
    let data:any;

    for(let field of fields) {
      data = {name:field.label,required:field.required};
      switch (field.type) {
        case 'simpletext':
          data.value = '';
          items.push(new FieldItem(SimpletextComponent,data));
          break;

        case 'multitext':
          data.value = '';
          items.push(new FieldItem(MultitextComponent,data));
          break;

        case 'combobox':
          data.options = field.items;
          data.value = field.items[0];
          items.push(new FieldItem(ComboboxComponent,data));
          break;

        case 'radio':
          data.options = field.items;
          data.value = field.items[0];
          items.push(new FieldItem(RadioComponent,data));
          break;

        case 'date':
          data.value = '2007-01-01';
          items.push(new FieldItem(DateComponent,data));
          break;

        case 'checkbox':
          data.value = false;
          items.push(new FieldItem(CheckboxComponent,data));
          break;
      }
    }
    return items;
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector:'congratulation',
  template: '    <div class="form-group">\n' +
            '      <h3 class="col-xs-10">Congratulation!!! You did ' +
            '       <p>Now, go away, and calling your friends.</p>' +
            '       <br/>' +
            '       <p>They must to try this to</p></h3>\n' +
            '    </div>'
})
export class CongratulationComponent{}

