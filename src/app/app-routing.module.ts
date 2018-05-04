import {CollectorFieldListComponent,CongratulationComponent} from "./data-collector/field-list.component";
import {ResponseListComponent} from "./admin-cab/responses/response-list.component";
import {FieldEditorComponent} from "./admin-cab/fields/field-editor.component";
import {FieldListComponent} from "./admin-cab/fields/field-list.component";
import {LoginComponent} from "./admin-cab/login/login.component";
import {PageNotFoundComponent} from "./page-no-found.component";
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

//----------------------------------------------------------------------------------------------------------------------
@NgModule({
  imports : [RouterModule.forRoot([
    {path: 'main'  ,component: CollectorFieldListComponent},
    {path: 'login' , component: LoginComponent},
    {path: ''      , redirectTo: 'main' , pathMatch: 'full'},
    {path:'responses'         ,component: ResponseListComponent},
    {path:'fields'            ,component: FieldListComponent},
    {path:'fields/editor/:id' ,component: FieldEditorComponent},
    {path:'congratulation'    ,component: CongratulationComponent},
    {path:'**'                ,component: PageNotFoundComponent},
  ])],
  exports : [RouterModule]
})
export class AppRoutingModule{}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
