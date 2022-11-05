import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-public-keys',
  templateUrl: './generate-public-keys.component.html',
  styleUrls: ['./generate-public-keys.component.scss'],
})
export class GeneratePublicKeysComponent implements OnInit {
  form!: FormGroup;
  primeError: boolean = false;
  relativelyPrimeError: boolean = false;
  disabledInputE: boolean = false;
  possibleE!: number;
  e!: number;
  n!: number;
  p!: number;
  q!: number;
  dontHasError: boolean = false;
  constructor() {
    this.form = new FormGroup({
      p: new FormControl(null, Validators.required),
      q: new FormControl(null, Validators.required),
      e: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  verify_if_is_prime(num: number): any {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  }

  generatePublicKeys(): void {
    const { p, q } = this.form?.value;
    const pIsPrime = this.verify_if_is_prime(p);
    const qIsPrime = this.verify_if_is_prime(q);
    if (pIsPrime && qIsPrime) {
      this.primeError = false;
      this.disabledInputE = false;
      this.dontHasError = true;
    } else {
      this.primeError = true;
    }
  }

  mdc(num1: number, num2: number): number {
    let rest;
    do {
      rest = num1 % num2;
      num1 = num2;
      num2 = rest;
    } while (rest != 0);
    return num1;
  }
  totient(p: number, q: number): number {
    const phiN = (p - 1) * (q - 1);
    return phiN;
  }
  checkE(): void {
    const { p, q, e } = this.form?.value;
    const mdc = this.mdc(e, this.totient(p, q));
    if (mdc != 1 || e <= 1) {
      this.relativelyPrimeError = true;
      this.generatePossibleE();
    } else {
      this.e = e;
      this.n = p * q;
      this.p = p;
      this.q = q;
      this.relativelyPrimeError = false;
    }
  }
  generatePossibleE(): void {
    const { p, q } = this.form?.value;
    const totienteValue = this.totient(p, q);
    const possibleE = Math.floor(Math.random() * totienteValue - 100) + 100;
    if (this.mdc(possibleE, totienteValue) == 1 && possibleE > totienteValue) {
      this.possibleE = possibleE;
      return;
    } else {
      this.generatePossibleE();
    }
  }
  private setting = {
    element: {
      dynamicDownload: null as unknown as HTMLElement,
    },
  };

  savePublicKeys(arg: { fileName: string; text: string }): void {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType =
      arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute(
      'href',
      `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`
    );
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent('click');
    element.dispatchEvent(event);
  }
}
