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
var ResponseListComponent = (function () {
    function ResponseListComponent(admin_service) {
        this.admin_service = admin_service;
        //
        this.field_names = [];
        this.table_data = [];
        this.error_message = '';
    }
    //====================================================================================================================
    ResponseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin_service.get("FieldNames")
            .subscribe(function (result) {
            _this.error_message = '';
            _this.field_names = result;
        }, function (err) {
            _this.error_message = err.message;
        });
        this.admin_service.get("UserData")
            .subscribe(function (result) {
            _this.error_message = '';
            _this.table_data = result;
            _this.openSocket();
        }, function (err) {
            _this.error_message = err.message;
        });
    };
    //
    ResponseListComponent.prototype.ngOnDestroy = function () {
        if (this.ws !== undefined)
            this.ws.close();
    };
    //
    ResponseListComponent.prototype.openSocket = function () {
        var _this = this;
        this.ws = new WebSocket('ws://data-collector-service-230817.herokuapp.com/ws');
        this.ws.onmessage = function (message) {
            _this.table_data.push(JSON.parse(message.data));
            _this.admin_service.response_number++;
        };
        this.ws.onopen = function () { console.log('[WebSocket is Opened...]'); };
        this.ws.onclose = function () { console.log('[WebSocket is Closed...]'); };
    };
    ResponseListComponent = __decorate([
        core_1.Component({
            selector: 'response-list',
            templateUrl: './response-list.component.html'
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], ResponseListComponent);
    return ResponseListComponent;
}());
exports.ResponseListComponent = ResponseListComponent;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=response-list.component.js.map