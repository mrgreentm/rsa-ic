import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-decript',
  templateUrl: './decript.component.html',
  styleUrls: ['./decript.component.scss'],
})
export class DecriptComponent implements OnInit {
  form!: FormGroup;
  dencriptedData!: string[];
  constructor() {
    this.form = new FormGroup({
      p: new FormControl(null, Validators.required),
      q: new FormControl(null, Validators.required),
      e: new FormControl(null, Validators.required),
      enteredData: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}
  dencript(): void {}
}
