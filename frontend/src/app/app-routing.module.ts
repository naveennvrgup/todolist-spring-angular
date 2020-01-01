import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGaurdService] },
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGaurdService] },
  { path: 'todos', component: TodoComponent, canActivate: [RouteGaurdService] },
  { path: 'todos/:id', component: TodoDetailComponent, canActivate: [RouteGaurdService] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
