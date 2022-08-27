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
      primaryKey: new FormControl(null),
      secondatyKey: new FormControl(null),
    })
  }

  ngOnInit() {
    this.form.get('enteredDataEncripted')?.disable();
  }
}
