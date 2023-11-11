import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { authGuard } from 'src/auth/auth.guard';
import { RestrictedComponent } from './restricted/restricted.component';
import { guardUserGuard } from 'src/auth/guard-user.guard';

const routes: Routes = [{path : '', component:LogInComponent},

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivateChild:[authGuard] },
{ path: 'articulos', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule), canActivateChild:[guardUserGuard] },
{path: 'login', component:LogInComponent},
{path: 'restricted', component:RestrictedComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
