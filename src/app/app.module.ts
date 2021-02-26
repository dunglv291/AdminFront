import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { MenuComponent } from './modules/menu/menu.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ViewUserComponent } from './modules/view/userView/userview.component';
import { DasboadComponent } from './modules/view/dasboad/dasboad.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './modules/view/view.component';
import { ViewProductComponent } from './modules/view/productView/productview.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ViewUserComponent,
    DasboadComponent,
    ViewProductComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
