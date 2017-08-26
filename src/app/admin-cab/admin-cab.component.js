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
var admin_service_1 = require("../services/admin.service");
//----------------------------------------------------------------------------------------------------------------------
var AdminCabHeaderComponent = (function () {
    function AdminCabHeaderComponent(admin_service) {
        this.admin_service = admin_service;
        this.admin_service.updateResponseNumber();
    }
    AdminCabHeaderComponent.prototype.logOut = function () {
        this.admin_service.logOut();
    };
    AdminCabHeaderComponent = __decorate([
        core_1.Component({
            selector: "admin_cab_headrer",
            template: '<nav>\n' +
                '  <h3>\n' +
                '    <a routerLink="/" (click)="logOut()" routerLinkActive="active"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Form</a>' +
                '    <a routerLink="/fields" routerLinkActive="active"><span class="glyphicon glyphicon-list" aria-hidden="true"></span> Fields</a>\n' +
                '    <a routerLink="/responses" routerLinkActive="active"><span class="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span> Responses <span class="badge">{{admin_service.response_number}}</span></a>\n' +
                '  </h3>\n' +
                '</nav>'
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], AdminCabHeaderComponent);
    return AdminCabHeaderComponent;
}());
exports.AdminCabHeaderComponent = AdminCabHeaderComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=admin-cab.component.js.map