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
var admin_service_1 = require("../../services/admin.service");
//----------------------------------------------------------------------------------------------------------------------
var FieldListComponent = (function () {
    function FieldListComponent(admin_service) {
        this.admin_service = admin_service;
        //
        this.error_message = '';
        this.fields = [];
    }
    //====================================================================================================================
    FieldListComponent.prototype.delete = function (label) {
        var _this = this;
        this.admin_service.deleteField(label)
            .subscribe(function (result) {
            _this.ngOnInit();
        }, function (err) {
            console.log(err.message);
        });
    };
    //
    FieldListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin_service.get("Fields")
            .subscribe(function (result) {
            _this.error_message = '';
            _this.fields = result;
        }, function (err) {
            _this.error_message = err.message;
        });
    };
    FieldListComponent = __decorate([
        core_1.Component({
            selector: 'field-list',
            templateUrl: './field-list.component.html'
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], FieldListComponent);
    return FieldListComponent;
}());
exports.FieldListComponent = FieldListComponent;
//# sourceMappingURL=field-list.component.js.map