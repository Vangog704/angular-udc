import { Component, Input } from '@angular/core';
import { Type } from '@angular/core';
//----------------------------------------------------------------------------------------------------------------------
export class FieldComponent
{
  data:any;
  //====================================================================================================================
  public valid():boolean
  {
    if(this.data.required && this.data.value === '')
      return false;

    return true;
  }
  //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class FieldItem {
  constructor(public component: Type<any>, public data: any) {}
}

import { Directive, ViewContainerRef } from '@angular/core';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Directive({
  selector: '[field-host]'
})
export class FieldDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: '<div class="form-group">'+
  ' <div class="col-xs-10 col-sm-4">'+
  '  <label>{{data.name}}: <b *ngIf="data.reuired">*</b></label>'+
  '  <input   [(ngModel)]="data.value" name="{{data.name}}" type="text" class="form-control" required="{{data.required}}"/>'+
  ' </div>'+
  '</div>'
})
export class SimpletextComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: '<div class="form-group">'+
  ' <div class="col-xs-10 col-sm-4">'+
  '  <label>{{data.name}}: <b *ngIf="data.required">*</b></label>' +
  '   <textarea [(ngModel)]="data.value" name="{{data.name}}" class="form-control" rows="5"></textarea>'+
  ' </div>'+
  '</div>'
})
export class MultitextComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: '<div class="form-group">\n'+
  '  <div class="col-xs-10 col-sm-4 selectContainer">\n'+
  '    <label>{{data.name}}</label>\n'+
  '    <select [(ngModel)]="data.value" class="form-control" name="{{data.name}}">\n'+
  '     <option *ngFor="let option of data.options" value="{{option}}">{{option}}</option>'+
  '    </select>\n'+
  '  </div>\n'+
  '</div>'
})
export class ComboboxComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: ' <div class="form-group">\n' +
  '      <div class="col-xs-10 col-sm-4">\n' +
  '        <label>{{data.name}}</label>\n' +
  '        <div *ngFor="let option of data.options" class="radio">\n' +
  '          <label><input  type="radio" ' +
  '                         name="{{data.name}}" ' +
  '                         value="{{option}}" ' +
  '                         [(ngModel)]="data.value"' +
  '                 >{{option}}</label>\n' +
  '        </div>\n' +
  '      </div>\n' +
  '  </div>'
})
export class RadioComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: '<div class="form-group">\n' +
  ' <div class="col-xs-10 col-sm-4 selectContainer">\n' +
  '   <label>{{data.name}}</label>\n' +
  '   <input [(ngModel)]="data.value" type="date" class="form-control">\n' +
  ' </div>\n' +
  '</div>'
})
export class DateComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  template: '<div class="form-group">\n' +
  ' <div class="col-xs-10 col-sm-4">\n' +
  '   <div class="checkbox">\n' +
  '     <label><input [(ngModel)]="data.value" name="{{data.name}}" type="checkbox">' +
  '     <b>{{data.name}}</b></label>' +
  '   </div>\n' +
  ' </div>\n' +
  '</div>'
})
export class CheckboxComponent extends FieldComponent
{
  @Input() data:any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
