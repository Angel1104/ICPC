import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { LayoutComponent } from './Componentes/layout/layout.component';
import { HomepageComponent } from './Componentes/homepage/homepage.component';

const routes: Routes = [
  {path: " ", component : LayoutComponent, pathMatch:"full"},
  {path: "login", component : LoginComponent, pathMatch:"full"},
  {path: "admin", loadChildren: ()=> import("./Componentes/layout/layout.module").then(x => x.LayoutModule) },
  {path: "home", component: HomepageComponent, pathMatch:"full"},
  {path:'**',redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
