import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],

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
  errorMessage: string = "";

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;  // Regex for validation
    if (!namePattern.test(this.userName)) {
      this.errorMessage = "Invalid Name! Start with a capital letter and at least 3 letters.";
    } else {
      this.errorMessage = "";  // Clear error when valid
    }
  }
}
