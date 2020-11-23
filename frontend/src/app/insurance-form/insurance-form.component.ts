import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import * as moment from 'moment';
import { Insurance } from '../models/insurance';
import { AddInsurance } from '../store/actions';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  private readonly defaultFormValues = {
    powerUnits: 0,
    proposedEffectiveDate: moment(),
    proposedExpirationDate: moment().add(1, 'y'),
    businessName: '',
    businessDescription: ''
  };

  reactiveForm = this.formBuilder.group({
    powerUnits: [this.defaultFormValues.powerUnits, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    proposedEffectiveDate: [this.defaultFormValues.proposedEffectiveDate, Validators.required],
    proposedExpirationDate: [this.defaultFormValues.proposedExpirationDate, Validators.required],
    businessName: [this.defaultFormValues.businessName, [Validators.required, Validators.maxLength(50)]],
    businessDescription: [this.defaultFormValues.businessDescription, Validators.maxLength(50)]
  });

  public error: string | null = null;

  constructor(private formBuilder: FormBuilder, private store: Store, private changeDect: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.reactiveForm.get('powerUnits')?.valueChanges.subscribe(changes => { console.log(changes) });
  }

  addInsurance(insurance: Insurance): void {
    this.store.dispatch(new AddInsurance(insurance)).subscribe(
      () => {
        this.error = null;
        this.reactiveForm.reset(this.defaultFormValues);
      },
      err => {
        this.error = 'There was an error calling the API.'
      });
  }


  submit(): void {
    if (this.reactiveForm.invalid) return;
    const formValues = {
      ...this.reactiveForm.value,
      powerUnits: +this.reactiveForm.value.powerUnits
    }
    this.addInsurance(formValues);
  }
}