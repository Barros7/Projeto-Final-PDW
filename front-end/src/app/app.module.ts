import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { HomeComponent } from './components/views/home/home.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { ExpenseComponent } from './components/views/expense/expense.component';
import { AboutComponent } from './components/views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SidenavComponent,
    ProfileComponent,
    ExpenseComponent,
    AboutComponent
  ],
  imports: [
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
