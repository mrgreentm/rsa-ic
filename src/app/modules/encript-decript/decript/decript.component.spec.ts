/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DecriptComponent } from './decript.component';

describe('DecriptComponent', () => {
  let component: DecriptComponent;
  let fixture: ComponentFixture<DecriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
