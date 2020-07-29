import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeView } from './components/HomeView/home.component';
import { NavBar } from './components/NavBar/navbar.component';
import { DashBoard } from './components/DashBoard/dash.component';
import { DataService } from './data.service';

const routes: Route[] = [
  {
    path: '',
    component: HomeView,
  },
  {
    path: 'dashboard',
    component: DashBoard,
    children: [
      {}, //para sub rutas
    ],
  },
];
@NgModule({
  declarations: [AppComponent, HomeView, DashBoard, NavBar],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
