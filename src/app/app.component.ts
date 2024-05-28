import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pmd-devops';
  productId: string = '';
  product: any;

  constructor(private readonly http: HttpClient) {}

  cGetProducts() {
    if (this.productId) {
      this.http.get(`https://api.example.com/products/${this.productId}`).subscribe(
        (response: any) => {
          this.product = response;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.warn('Product ID  required');
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], 
  bootstrap: [AppComponent]
})
export class AppModule { }
