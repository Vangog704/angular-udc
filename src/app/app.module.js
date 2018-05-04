"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var field_editor_component_1 = require("./admin-cab/fields/field-editor.component");
var response_list_component_1 = require("./admin-cab/responses/response-list.component");
var field_list_component_1 = require("./admin-cab/fields/field-list.component");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var admin_service_1 = require("./services/admin.service");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var custom_fields_components_1 = require("./data-collector/custom-fields.components");
var field_list_component_2 = require("./data-collector/field-list.component");
var admin_cab_component_1 = require("./admin-cab/admin-cab.component");
var login_component_1 = require("../admin-cab/loginer/login.component");
var page_no_found_component_1 = require("./page-no-found.component");
//----------------------------------------------------------------------------------------------------------------------
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
            ],
            declarations: [
                field_list_component_2.CollectorFieldListComponent,
                field_list_component_2.CongratulationComponent,
                admin_cab_component_1.AdminCabHeaderComponent,
                response_list_component_1.ResponseListComponent,
                field_editor_component_1.FieldEditorComponent,
                field_list_component_1.FieldListComponent,
                login_component_1.LoginComponent,
                page_no_found_component_1.PageNotFoundComponent,
                app_component_1.AppComponent,
                custom_fields_components_1.SimpletextComponent,
                custom_fields_components_1.MultitextComponent,
                custom_fields_components_1.ComboboxComponent,
                custom_fields_components_1.CheckboxComponent,
                custom_fields_components_1.RadioComponent,
                custom_fields_components_1.DateComponent,
                custom_fields_components_1.FieldDirective
            ],
            providers: [
                admin_service_1.AdminService,
            ],
            entryComponents: [
                custom_fields_components_1.SimpletextComponent,
                custom_fields_components_1.MultitextComponent,
                custom_fields_components_1.ComboboxComponent,
                custom_fields_components_1.CheckboxComponent,
                custom_fields_components_1.RadioComponent,
                custom_fields_components_1.DateComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=app.module.js.map
