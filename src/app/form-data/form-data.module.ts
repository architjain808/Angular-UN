import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FirstPipe } from "../first-pipe.pipe";
import { DataDisplayComponent } from "./data-display/data-display.component";
import { FormDataRoutingModule } from "./form-data-routing.module";
import { PostComponent } from "./post/post.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@NgModule({
    declarations:[
     DataDisplayComponent,
     ReactiveFormComponent,
     PostComponent,
     FirstPipe,
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FormDataRoutingModule
        
    ],
    exports:[
        DataDisplayComponent,
        ReactiveFormComponent,
        PostComponent    
    ]
})
export class FormsDataModule {}