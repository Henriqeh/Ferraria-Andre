import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path:'',redirectTo:'catalogo',pathMatch:'full'},
  {path:'catalogo', component:CatalogoComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
