import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shoe-cart';
}
