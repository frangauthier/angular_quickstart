import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './layout/chat/chat.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGuard } from './guards/admin.guard';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from './services/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    AdminGuard,
    WebsocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
