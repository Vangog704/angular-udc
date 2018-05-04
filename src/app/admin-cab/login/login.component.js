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
var admin_service_1 = require("../../services/admin.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//----------------------------------------------------------------------------------------------------------------------
var LoginComponent = (function () {
    function LoginComponent(admin_service, router) {
        this.admin_service = admin_service;
        this.router = router;
        //
        this.error_message = '';
    }
    //====================================================================================================================
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        var form = this.validform();
        if (form === null)
            return;
        this.admin_service.logIn(form)
            .subscribe(function (data) {
            _this.error_message = '';
            _this.admin_service.setToken(data['authToken']);
            _this.router.navigateByUrl("fields");
        }, function (err) {
            _this.error_message = err.message;
        });
    };
    //
    LoginComponent.prototype.validform = function () {
        if (this.login !== '' && this.password !== '')
            return { login: this.login, password: this.password };
        this.error_message = "Fill all required fields... Please (it's marked like this: ' * ')";
        return null;
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=login.component.js.map