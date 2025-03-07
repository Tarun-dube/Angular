import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],

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

  userName: string="";
}
