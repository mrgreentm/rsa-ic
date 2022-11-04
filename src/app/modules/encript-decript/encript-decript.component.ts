import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encript-decript',
  templateUrl: './encript-decript.component.html',
  styleUrls: ['./encript-decript.component.scss'],
})
export class EncriptDecriptComponent implements OnInit {
  form!: FormGroup;
  encriptedData: number[] = [];
  constructor() {
    this.form = new FormGroup({
      enteredData: new FormControl<string>('', [Validators.required]),
      enteredDataEncripted: new FormControl<number[]>([]),
      publicKeys: new FormControl<number[]>([]),
      privateKeys: new FormControl<number[]>([]),
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
    console.log(enteredDataInASCII);
    this.generateKeys();
    this.encriptForEachElement(enteredDataInASCII);
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
    /*  this.generatePrivateKey(
      this.totient(p, q),
      this.form.get('publicKeys')?.value[1]
    ); */
  }

  totient(p: number, q: number): number {
    const phiN = (p - 1) * (q - 1);
    return phiN;
  }
  generateE(totientValue: number): any {
    console.log(totientValue);
    const possibleE = Math.floor(Math.random() * totientValue - 100) + 100;
    if (possibleE > 1 && possibleE < totientValue) {
      console.log(possibleE);
      this.form.get('publicKeys')?.value.push(possibleE);
      return possibleE;
    } else {
      this.generateE(totientValue);
    }
  }
  /* generatePrivateKey(totienteValue: number): void {
    let d = 0;
    const e = this.form.get('publicKeys')?.value[1];
    let product = d * e;
    while (this.mod(product, totienteValue) !== 1) {
      this.generatePrivateKey(totienteValue);
    }
    this.form.get('privateKeys')?.value.push(d);
    console.log(this.form);
  } */

  generatePrivateKey(toti: number, e: number) {
    console.log('cheguei aqui');
    var d;
    d = 0;
    console.log(d * e);
    while (this.mod(d * e, toti) !== 1) {
      console.log(d);
      d += 1;
    }
    this.form.get('privateKeys')?.value.push(d);
    console.log(d);
    return d;
  }

  mod(a: number, b: number) {
    let c = 0;
    if (a < b) {
      return a;
    } else {
      c = a % b;
      return c;
    }
  }
  encriptForEachElement(enteredDataInASCII: number[]): void {
    let encriptedData: number[] = [];
    const n = this.form.get('publicKeys')?.value[0];
    const e = this.form.get('publicKeys')?.value[1];
    enteredDataInASCII.forEach((element: number) => {
      encriptedData.push(Math.floor(Math.pow(element, e) % n));
    });
    console.log(Math.floor(Math.pow(enteredDataInASCII[0], e)));
    console.log(encriptedData);
    encriptedData.forEach((element: number) => {
      this.encriptedData.push(element);
    });
  }
  decriptForEachElement() {
    var i, decriptedData: number[], result;
    i = 0;
    decriptedData = [];
    let cifra = this.encriptedData;
    const d = this.form.get('privateKeys')?.value[0];
    const n = this.form.get('publicKeys')?.value[0];

    while (i < this.encriptedData.length) {
      result = Math.pow(cifra[i], d);
      console.log(cifra[i]);
      console.log(d);
      let rest = this.mod(result, n);
      decriptedData.push(rest);
      i += 1;
    }
    console.log(decriptedData);
    return decriptedData;
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
