import {CollectorFieldListComponent,CongratulationComponent} from "./data-collector/field-list.component";
import {ResponseListComponent} from "./admin-cab/responses/response-list.component";
import {FieldEditorComponent} from "./admin-cab/fields/field-editor.component";
import {FieldListComponent} from "./admin-cab/fields/field-list.component";
import {LoginComponent} from "./admin-cab/loginer/login.component";
import {PageNotFoundComponent} from "./page-no-found.component";
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

//----------------------------------------------------------------------------------------------------------------------
@NgModule({
  imports : [RouterModule.forRoot([
    {path:''                  ,component: CollectorFieldListComponent},
    {path:'congratulation'    ,component: CongratulationComponent},
    {path:'responses'         ,component: ResponseListComponent},
    {path:'fields/editor/:id' ,component: FieldEditorComponent},
    {path:'fields'            ,component: FieldListComponent},
    {path:'login'             ,component: LoginComponent},
    {path:'**'                ,component: PageNotFoundComponent}
  ])],
  exports : [RouterModule]
})
export class AppRoutingModule{}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
