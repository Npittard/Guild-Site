import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BulletinCarouselComponent } from './components/bulletin-carousel/bulletin-carousel.component';
import { RecruitmentBoxComponent } from './components/recruitment-box/recruitment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BulletinCarouselComponent,
    RecruitmentBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
