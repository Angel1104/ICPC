import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { LayoutComponent } from './Componentes/layout/layout.component';
import { SharedModule } from './Componentes/Reutilizable/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Componentes/homepage/homepage.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { CardsectionComponent } from './Componentes/cardsection/cardsection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CardsectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
