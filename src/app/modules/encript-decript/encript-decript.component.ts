import { Alphabet } from './../shared-module/alphabet';
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
  alphabet = Alphabet.list();
  constructor() {
    this.form = new FormGroup({
      enteredData: new FormControl('', [Validators.required]),
      enteredDataEncripted: new FormControl([]),
      e: new FormControl(null, Validators.required),
      n: new FormControl(null, Validators.required),
      privateKeys: new FormControl([]),
    });
  }

  ngOnInit() {
    this.form.get('enteredDataEncripted')?.disable();
  }
  encript(): void {
    const { enteredData } = this.form?.value;
    const splitedEnteredData = enteredData.split('');
    const transformedData = [] as number[];
    for (let i = 0; i < splitedEnteredData.length; i++) {
      for (let j = 0; j < this.alphabet.length; j++) {
        splitedEnteredData[i] == this.alphabet[j].letter
          ? transformedData.push(this.alphabet[j].value)
          : 0;
      }
    }
    this.encriptForEachElement(transformedData);
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
  encriptForEachElement(transformedEnteredData: number[]): void {
    const { e, n } = this.form?.value;
    const encriptedData = [] as number[];
    transformedEnteredData.forEach((element) => {
      const value = Math.pow(element, e) % n;
      encriptedData.push(value);
    });
    this.encriptedData = encriptedData;
    this.saveEncriptedData({
      fileName: 'encriptedMessage',
      text: this.encriptedData.toString(),
    });
  }
  decriptForEachElement() {}

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

  private setting = {
    element: {
      dynamicDownload: null as unknown as HTMLElement,
    },
  };

  saveEncriptedData(arg: { fileName: string; text: string }): void {
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
