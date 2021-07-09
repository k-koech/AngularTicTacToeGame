import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NbSidebarModule,
    NbLayoutModule,
    CommonModule
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

