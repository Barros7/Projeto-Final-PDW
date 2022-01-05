import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { HomeComponent } from './components/views/home/home.component';
import { ExpenseComponent } from './components/views/expense/expense.component';
import { AboutComponent } from './components/views/about/about.component';
import { ProfileComponent } from './components/views/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'home', component: HomeComponent },
  { path:'expense', component: ExpenseComponent },
  { path:'profile', component: ProfileComponent },
  { path:'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
