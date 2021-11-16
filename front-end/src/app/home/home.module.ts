import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent} 
];

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
