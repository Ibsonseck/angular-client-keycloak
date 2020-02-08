import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanAuthenticationGuard } from './services/keycloak-auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanAuthenticationGuard],
    data: {
      roles: ["user"]
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [CanAuthenticationGuard],
    data: {
      roles: ["admin"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAuthenticationGuard]
})
export class AppRoutingModule { }
