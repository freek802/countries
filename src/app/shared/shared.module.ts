import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    ErrorMessageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    OrderbyPipe,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ErrorMessageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    OrderbyPipe,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
