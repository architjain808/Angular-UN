import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { RouterAuthService } from './Services/router-auth.service';

const routes: Routes = [
  {
    path: 'display',
    canActivate: [RouterAuthService],
    component: DisplayComponent,
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
