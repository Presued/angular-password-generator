import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeNumbers = false;
  includeSymbols = false;
  includeLetters = false;
  password = '';

  onChangeLength(event: Event) {
    this.length = parseInt((event.target as HTMLInputElement).value)
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
      const numbers = '1234567890';
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const symbols = '!@#$%^&*()'

      let validChars = '';
      if (this.includeLetters) {
        validChars += letters;
      }
      if(this.includeNumbers) {
        validChars += numbers;
      }
      if (this.includeSymbols) {
        validChars += symbols;
      }

      let generatedPassword = '';
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
      }

      this.password = generatedPassword;
  }
}
