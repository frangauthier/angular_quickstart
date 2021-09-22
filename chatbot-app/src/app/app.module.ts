import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components/layouts
import { AdminComponent } from './layout/admin/admin.component';
import { ChatComponent } from './layout/chat/chat.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { HomeComponent } from './layout/home/home.component';
// Guard
import { AlwaysAuthGuard } from './guard/always.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AlwaysAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
