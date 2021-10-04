import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGuard } from './guards/admin.guard';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryProgressComponent } from './components/delivery-progress/delivery-progress.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    DeliveryComponent,
    DeliveryProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule, // https://github.com/angular/flex-layout
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
