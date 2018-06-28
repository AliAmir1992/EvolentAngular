import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from '@angular/core';

export const routeConfig : Routes = [
    {
        path : '',
        component : ContactComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routeConfig, {})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }