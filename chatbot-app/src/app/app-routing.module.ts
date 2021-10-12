import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRentalComponent } from './components/create-rental/create-rental.component';
import { RentalComponent } from './components/rental/rental.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rental', component: RentalComponent, children: [
    {path: 'create', component: CreateRentalComponent, canActivate: [AdminGuard]},
  ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
