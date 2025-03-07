import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorldApp';
  message: string="Hello from BridgeLabz";
  //add logo
  bridgeLabzLogo: string="../bridgelabzlogo.jpeg";

  // //  Function to open BridgeLabz website
  openBridgeLabz(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
