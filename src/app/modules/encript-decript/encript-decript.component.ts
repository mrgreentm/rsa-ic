import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encript-decript',
  templateUrl: './encript-decript.component.html',
  styleUrls: ['./encript-decript.component.scss'],
})
export class EncriptDecriptComponent implements OnInit {
  form!: FormGroup;
  constructor() {
    this.form = new FormGroup({
      enteredData: new FormControl(null, [Validators.required]),
      enteredDataEncripted: new FormControl(null),
      publicKeys: new FormControl([]),
      privateKeys: new FormControl([]),
    });
  }

  ngOnInit() {
    this.form.get('enteredDataEncripted')?.disable();
  }
  encript(): void {
    const enteredData = this.form.get('enteredData')?.value;
    let enteredDataInASCII = [];
    for (let i = 0; i < enteredData.length; i++) {
      enteredDataInASCII.push(enteredData.charCodeAt(i));
    }
    console.log(enteredDataInASCII)
  }
  generateKeys(): void {
    let p;
    let q;
    while (!p) {
      p = this.generatePrime();
    }
    while (!q) {
      q = this.generatePrime();
    }
    const n = p * q;
    this.form.get('publicKeys')?.value.push(n);
    this.generateE(this.totient(p, q));
  }

  totient(p: number, q: number): number {
    const phiN = (p - 1) * (q - 1);
    return phiN;
  }
  generateE(totientValue: number): any {
    const possibleE = Math.floor(Math.random() * (totientValue - 1000) + 1000);
    if (possibleE > 1 && possibleE < totientValue) {
      this.form.get('publicKeys')?.value.push(possibleE);
      return possibleE;
    } else {
      this.generateE(totientValue);
    }
  }

  generatePrime(): any {
    const number = Math.floor(Math.random() * 1000);
    let dividers: number[] = [];
    for (let i = 1; i <= number; i++) {
      const rest = number % i;
      if (!rest) {
        dividers.push(i);
      }
    }
    if (dividers.length === 2 && dividers[0] === 1 && dividers[1] === number) {
      return dividers[1];
    } else {
      this.generatePrime();
    }
  }
}
