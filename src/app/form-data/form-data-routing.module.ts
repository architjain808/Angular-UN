import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DataDisplayComponent } from "./data-display/data-display.component";
import { PostComponent } from "./post/post.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
const routes: Routes = [
    {path: 'ReactiveForm', component:ReactiveFormComponent},
    {path:'data-display' , component:DataDisplayComponent},
    {path:'post/:id' , component:PostComponent}
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormDataRoutingModule { }