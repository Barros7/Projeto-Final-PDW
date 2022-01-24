import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { HomeComponent } from './components/views/home/home.component';
import { ExpenseComponent } from './components/views/expense/expense.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { AuthGuardService } from './resources/services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  /*
  { 
    path:'home', 
    canActivate: [AuthGuardService],
    component: HomeComponent, 
    loadChildren: () =>
    import('./components/views/home/home.component').then( (h) => h.HomeComponent ),
  },*/
  { path: 'register', component: RegisterComponent },
  { path:'expense', component: ExpenseComponent },
  { path:'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
