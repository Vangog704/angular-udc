"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var field_list_component_1 = require("./data-collector/field-list.component");
var response_list_component_1 = require("./admin-cab/responses/response-list.component");
var field_editor_component_1 = require("./admin-cab/fields/field-editor.component");
var field_list_component_2 = require("./admin-cab/fields/field-list.component");
var login_component_1 = require("./admin-cab/loginer/login.component");
var page_no_found_component_1 = require("./page-no-found.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
//----------------------------------------------------------------------------------------------------------------------
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot([
                    { path: '', component: field_list_component_1.CollectorFieldListComponent },
                    { path: 'congratulation', component: field_list_component_1.CongratulationComponent },
                    { path: 'responses', component: response_list_component_1.ResponseListComponent },
                    { path: 'fields/editor/:id', component: field_editor_component_1.FieldEditorComponent },
                    { path: 'fields', component: field_list_component_2.FieldListComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: '**', component: page_no_found_component_1.PageNotFoundComponent }
                ])],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=app-routing.module.js.map
