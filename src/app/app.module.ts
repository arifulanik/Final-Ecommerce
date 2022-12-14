import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HearderComponent } from './components/hearder/hearder.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HearderComponent,
    CartComponent,
    DashboardComponent,
    AddProductComponent,
    UpdateProductComponent
    // TablePaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
