import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm = this.formBuilder.group({
    powerUnits: [0, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    proposedEffectiveDate: [moment(), Validators.required],
    proposedExpirationDate: [moment().add(1, 'y'), Validators.required],
    businessName: ['', [Validators.required, Validators.maxLength(50)]],
    businessDescription: ['', Validators.maxLength(50)]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm.get('powerUnits')?.valueChanges.subscribe(changes => { console.log(changes) });
  }

  submit() {

  }
}