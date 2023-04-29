import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './modules/experience/experience.component';
import { ApresentacaoModule } from './modules/apresentacao/apresentacao.module';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ExperienceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ApresentacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
