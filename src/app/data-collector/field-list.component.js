"use strict";
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
var custom_fields_components_1 = require("./custom-fields.components");
var admin_service_1 = require("../services/admin.service");
var router_1 = require("@angular/router");
//----------------------------------------------------------------------------------------------------------------------
var CollectorFieldListComponent = (function () {
    function CollectorFieldListComponent(componentFactoryResolver, admin_service, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.admin_service = admin_service;
        this.router = router;
        this.instance_list = [];
        this.error_message = '';
        this.ready = false;
    }
    //====================================================================================================================
    CollectorFieldListComponent.prototype.collect = function () {
        var _this = this;
        var data = {};
        this.ready = false;
        this.error_message = '';
        for (var _i = 0, _a = this.instance_list; _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance.data.required && instance.data.value === '') {
                this.error_message = 'Some required fields is empty';
                this.ready = true;
                return;
            }
            data[instance.data.name] = instance.data.value;
        }
        this.admin_service.save(data, "UserData").subscribe(function () { _this.router.navigateByUrl('congratulation'); });
    };
    //
    CollectorFieldListComponent.prototype.reset = function () {
        this.ready = false;
        this.instance_list = [];
        this.fieldHost.viewContainerRef.clear();
        this.ngAfterViewInit();
    };
    //
    CollectorFieldListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.admin_service.get("ActiveFields")
            .subscribe(function (fields) {
            _this.error_message = '';
            var instance;
            for (var _i = 0, _a = _this.createItems(fields); _i < _a.length; _i++) {
                var field_item = _a[_i];
                instance = _this.fieldHost.viewContainerRef
                    .createComponent(_this.componentFactoryResolver.resolveComponentFactory(field_item.component))
                    .instance;
                instance.data = field_item.data;
                _this.instance_list.push(instance);
            }
            if (_this.instance_list.length > 0)
                _this.ready = true;
            else
                _this.error_message = 'No fields for filling';
        }, function (err) { _this.error_message = err.message; });
    };
    //
    CollectorFieldListComponent.prototype.createItems = function (fields) {
        var items = [];
        var data;
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            data = { name: field.label, required: field.required };
            switch (field.type) {
                case 'simpletext':
                    data.value = '';
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.SimpletextComponent, data));
                    break;
                case 'multitext':
                    data.value = '';
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.MultitextComponent, data));
                    break;
                case 'combobox':
                    data.options = field.items;
                    data.value = field.items[0];
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.ComboboxComponent, data));
                    break;
                case 'radio':
                    data.options = field.items;
                    data.value = field.items[0];
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.RadioComponent, data));
                    break;
                case 'date':
                    data.value = '2007-01-01';
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.DateComponent, data));
                    break;
                case 'checkbox':
                    data.value = false;
                    items.push(new custom_fields_components_1.FieldItem(custom_fields_components_1.CheckboxComponent, data));
                    break;
            }
        }
        return items;
    };
    __decorate([
        core_1.ViewChild(custom_fields_components_1.FieldDirective),
        __metadata("design:type", custom_fields_components_1.FieldDirective)
    ], CollectorFieldListComponent.prototype, "fieldHost", void 0);
    CollectorFieldListComponent = __decorate([
        core_1.Component({
            selector: 'field-list',
            templateUrl: './collector-field-list.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            admin_service_1.AdminService,
            router_1.Router])
    ], CollectorFieldListComponent);
    return CollectorFieldListComponent;
}());
exports.CollectorFieldListComponent = CollectorFieldListComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CongratulationComponent = (function () {
    function CongratulationComponent() {
    }
    CongratulationComponent = __decorate([
        core_1.Component({
            selector: 'congratulation',
            template: '    <div class="form-group">\n' +
                '      <h3 class="col-xs-10">Congratulation!!! You did ' +
                '       <p>Now, go away, and calling your friends.</p>' +
                '       <br/>' +
                '       <p>They must to try this to</p></h3>\n' +
                '    </div>'
        })
    ], CongratulationComponent);
    return CongratulationComponent;
}());
exports.CongratulationComponent = CongratulationComponent;
//# sourceMappingURL=field-list.component.js.map