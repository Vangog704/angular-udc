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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var admin_service_1 = require("../../services/admin.service");
var field_1 = require("../../classes/field");
require("rxjs/add/operator/switchMap");
//----------------------------------------------------------------------------------------------------------------------
var FieldEditorComponent = (function () {
    function FieldEditorComponent(actived_route, admin_service, router) {
        this.actived_route = actived_route;
        this.admin_service = admin_service;
        this.router = router;
        //
        this.new_item = '';
        this.options = [];
    }
    //====================================================================================================================
    FieldEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actived_route.paramMap
            .subscribe(function (result) {
            var id = result.get('id');
            if (id === 'create_new')
                _this.reset();
            else
                _this.admin_service.getWithParams("FieldById", { id: id })
                    .subscribe(function (result) {
                    _this.field = result;
                    _this.options = result.items;
                    _this.typeChange();
                });
        });
    };
    //
    FieldEditorComponent.prototype.reset = function () {
        this.field = new field_1.Field();
    };
    //
    FieldEditorComponent.prototype.typeChange = function () {
        if (this.field.type === 'combobox' || this.field.type === 'radio')
            this.field.items = this.options;
        else
            this.field.items = null;
    };
    //
    FieldEditorComponent.prototype.addItem = function (item) {
        if (this.new_item !== '') {
            this.options.push(this.new_item);
            this.new_item = '';
        }
    };
    //
    FieldEditorComponent.prototype.deleteItem = function (item) {
        this.options.splice(this.field.items.indexOf(item), 1);
    };
    //
    FieldEditorComponent.prototype.validate = function () {
        if ((this.field.label.length <= 2) ||
            (this.field.items !== null && this.field.items.length < 2))
            return false;
        return true;
    };
    //
    FieldEditorComponent.prototype.save = function () {
        var _this = this;
        if (this.validate()) {
            var status = '';
            this.admin_service.save(this.field, "Field").subscribe(function (result) {
                status = result;
                _this.router.navigateByUrl('fields');
            }, function (err) {
                console.log(err.message);
            });
        }
        else {
            console.log('invalidate. cant save ');
        }
    };
    FieldEditorComponent = __decorate([
        core_1.Component({
            selector: 'field-editor',
            templateUrl: './field-editor.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            admin_service_1.AdminService,
            router_1.Router])
    ], FieldEditorComponent);
    return FieldEditorComponent;
}());
exports.FieldEditorComponent = FieldEditorComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=field-editor.component.js.map