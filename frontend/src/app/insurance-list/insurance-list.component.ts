import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Insurance } from '../models/insurance';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.sass']
})
export class InsuranceListComponent implements OnInit {
  insurances$: Observable<Insurance[]>;

  constructor(private store: Store) {
    this.insurances$ = this.store.select<Insurance[]>(state => state.insurances);
  }

  ngOnInit(): void {
  }


  displayedColumns: string[] =
    ['powerUnits', 'proposedEffectiveDate', 'proposedExpirationDate', 'businessName', 'businessDescription'];
}
