import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeView } from './components/HomeView/home.component';
import { NavBar } from './components/NavBar/navbar.component';
import { DashBoard } from './components/DashBoard/dash.component';
import { DataService } from './data.service';
import { FormCreateComponent } from './form-create/form-create.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeView,
  },
  {
    path: 'dashboard',
    component: DashBoard,
    // children: [
    //   {}, //para sub rutas
    // ],
  },
  {
    path: 'facturador',
    component: FormCreateComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    DashBoard,
    NavBar,
    FormCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
