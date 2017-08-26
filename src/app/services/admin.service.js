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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
//----------------------------------------------------------------------------------------------------------------------
var AdminService = (function () {
    function AdminService(http, router) {
        this.http = http;
        this.router = router;
        //
        this.apiURL = '//data-collector-service-230817.herokuapp.com';
        this.auth_token = '';
    }
    //====================================================================================================================
    AdminService.prototype.setToken = function (token) {
        this.auth_token = token;
    };
    //
    AdminService.prototype.get = function (type) {
        var _this = this;
        return this.http.get(this.apiURL + '/get' + type, { headers: new http_1.HttpHeaders({ authToken: this.auth_token }) })
            .catch(function (err, obj) { return _this.error(err, obj); });
    };
    //
    AdminService.prototype.getWithParams = function (type, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var params = '?';
        for (var key in data)
            params += key + '=' + data[key] + '&';
        return this.http.get(this.apiURL + '/get' + type + params, { headers: new http_1.HttpHeaders({ authToken: this.auth_token }) })
            .catch(function (err, obj) { return _this.error(err, obj); });
    };
    //
    AdminService.prototype.save = function (data, type) {
        var _this = this;
        return this.http.post(this.apiURL + '/save' + type, data, { headers: new http_1.HttpHeaders({ authToken: this.auth_token }) })
            .catch(function (err, obj) { return _this.error(err, obj); });
    };
    //
    AdminService.prototype.deleteField = function (label) {
        var _this = this;
        return this.http.delete(this.apiURL + '/deleteField?id=' + label, { headers: new http_1.HttpHeaders({ authToken: this.auth_token }) })
            .catch(function (err, obj) { return _this.error(err, obj); });
    };
    //
    AdminService.prototype.logIn = function (form) {
        var _this = this;
        return this.http.post(this.apiURL + '/login', form)
            .catch(function (err, obj) { return _this.error(err, obj); });
    };
    //
    AdminService.prototype.logOut = function () {
        var _this = this;
        return this.http.post(this.apiURL + '/logout', { authToken: this.auth_token })
            .catch(function (err, obj) { return _this.error(err, obj); })
            .subscribe(function () { _this.auth_token = ''; });
    };
    //
    AdminService.prototype.error = function (err, obj) {
        if (err.status === 0) {
            throw (new Error("Service refused"));
        }
        if (err.status.toString().startsWith(4)) {
            if (err.status === 401) {
                this.router.navigateByUrl('login');
                throw (new Error("you are unauthorized"));
            }
            throw (new Error("Unknown Error"));
        }
        else
            return obj;
    };
    //
    AdminService.prototype.updateResponseNumber = function () {
        var _this = this;
        return this.http.get(this.apiURL + '/getResponseNumber', { headers: new http_1.HttpHeaders({ authToken: this.auth_token }) })
            .subscribe(function (result) { _this.response_number = result['number']; });
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=admin.service.js.map