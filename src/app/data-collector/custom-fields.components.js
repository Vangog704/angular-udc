"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//----------------------------------------------------------------------------------------------------------------------
var FieldComponent = (function () {
    function FieldComponent() {
    }
    //====================================================================================================================
    FieldComponent.prototype.valid = function () {
        if (this.data.required && this.data.value === '')
            return false;
        return true;
    };
    return FieldComponent;
}());
exports.FieldComponent = FieldComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FieldItem = (function () {
    function FieldItem(component, data) {
        this.component = component;
        this.data = data;
    }
    return FieldItem;
}());
exports.FieldItem = FieldItem;
var core_2 = require("@angular/core");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FieldDirective = (function () {
    function FieldDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FieldDirective = __decorate([
        core_2.Directive({
            selector: '[field-host]'
        }),
        __metadata("design:paramtypes", [core_2.ViewContainerRef])
    ], FieldDirective);
    return FieldDirective;
}());
exports.FieldDirective = FieldDirective;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SimpletextComponent = (function (_super) {
    __extends(SimpletextComponent, _super);
    function SimpletextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SimpletextComponent.prototype, "data", void 0);
    SimpletextComponent = __decorate([
        core_1.Component({
            template: '<div class="form-group">' +
                ' <div class="col-xs-10 col-sm-4">' +
                '  <label>{{data.name}}: <b *ngIf="data.reuired">*</b></label>' +
                '  <input   [(ngModel)]="data.value" name="{{data.name}}" type="text" class="form-control" required="{{data.required}}"/>' +
                ' </div>' +
                '</div>'
        })
    ], SimpletextComponent);
    return SimpletextComponent;
}(FieldComponent));
exports.SimpletextComponent = SimpletextComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var MultitextComponent = (function (_super) {
    __extends(MultitextComponent, _super);
    function MultitextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MultitextComponent.prototype, "data", void 0);
    MultitextComponent = __decorate([
        core_1.Component({
            template: '<div class="form-group">' +
                ' <div class="col-xs-10 col-sm-4">' +
                '  <label>{{data.name}}: <b *ngIf="data.required">*</b></label>' +
                '   <textarea [(ngModel)]="data.value" name="{{data.name}}" class="form-control" rows="5"></textarea>' +
                ' </div>' +
                '</div>'
        })
    ], MultitextComponent);
    return MultitextComponent;
}(FieldComponent));
exports.MultitextComponent = MultitextComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ComboboxComponent = (function (_super) {
    __extends(ComboboxComponent, _super);
    function ComboboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ComboboxComponent.prototype, "data", void 0);
    ComboboxComponent = __decorate([
        core_1.Component({
            template: '<div class="form-group">\n' +
                '  <div class="col-xs-10 col-sm-4 selectContainer">\n' +
                '    <label>{{data.name}}</label>\n' +
                '    <select [(ngModel)]="data.value" class="form-control" name="{{data.name}}">\n' +
                '     <option *ngFor="let option of data.options" value="{{option}}">{{option}}</option>' +
                '    </select>\n' +
                '  </div>\n' +
                '</div>'
        })
    ], ComboboxComponent);
    return ComboboxComponent;
}(FieldComponent));
exports.ComboboxComponent = ComboboxComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var RadioComponent = (function (_super) {
    __extends(RadioComponent, _super);
    function RadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "data", void 0);
    RadioComponent = __decorate([
        core_1.Component({
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
    ], RadioComponent);
    return RadioComponent;
}(FieldComponent));
exports.RadioComponent = RadioComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var DateComponent = (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DateComponent.prototype, "data", void 0);
    DateComponent = __decorate([
        core_1.Component({
            template: '<div class="form-group">\n' +
                ' <div class="col-xs-10 col-sm-4 selectContainer">\n' +
                '   <label>{{data.name}}</label>\n' +
                '   <input [(ngModel)]="data.value" type="date" class="form-control">\n' +
                ' </div>\n' +
                '</div>'
        })
    ], DateComponent);
    return DateComponent;
}(FieldComponent));
exports.DateComponent = DateComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CheckboxComponent = (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "data", void 0);
    CheckboxComponent = __decorate([
        core_1.Component({
            template: '<div class="form-group">\n' +
                ' <div class="col-xs-10 col-sm-4">\n' +
                '   <div class="checkbox">\n' +
                '     <label><input [(ngModel)]="data.value" name="{{data.name}}" type="checkbox">' +
                '     <b>{{data.name}}</b></label>' +
                '   </div>\n' +
                ' </div>\n' +
                '</div>'
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}(FieldComponent));
exports.CheckboxComponent = CheckboxComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=custom-fields.components.js.map