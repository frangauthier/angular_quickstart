import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlwaysAuthGuard } from './guard/always.guard';
import { AdminComponent } from './layout/admin/admin.component';
import { ChatComponent } from './layout/chat/chat.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'chat', component: ChatComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
