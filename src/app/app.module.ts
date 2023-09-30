import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PersonComponent } from './about/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    FooterComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
