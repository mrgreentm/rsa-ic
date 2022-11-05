import { EncriptService } from './../services/encript.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-decript',
  templateUrl: './decript.component.html',
  styleUrls: ['./decript.component.scss'],
})
export class DecriptComponent implements OnInit {
  form!: FormGroup;
  dencriptedData!: number[];
  constructor(private decriptService: EncriptService) {
    this.form = new FormGroup({
      p: new FormControl(null, Validators.required),
      q: new FormControl(null, Validators.required),
      e: new FormControl(null, Validators.required),
      enteredData: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}
  dencript(): void {
    let d: number = 2;
    const { p, q, e, enteredData } = this.form.value;
    const splitedEnteredData = enteredData.split(',');
    this.decriptService
      .desencript({ p, q, e, message: splitedEnteredData })
      .subscribe((res) => {
        this.dencriptedData = res.dencripted_message;
      });
    this.saveEncriptedData({
      fileName: 'decriptedMessage',
      text: this.dencriptedData?.toString(),
    });
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

  mod(a: number, b: number): number {
    if (a < b) {
      return a;
    } else {
      const c = a % b;
      return c;
    }
  }
}
