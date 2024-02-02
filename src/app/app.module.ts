import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './pages/landing/landing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JNotificationsModule } from './shared/components/notifications/notifications.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    JNotificationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'jellyfish-portal-test.eu.auth0.com',
      clientId: 'lxydpNXcIrsBiqUPW7QgJ0Gil7Im45AD'
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
