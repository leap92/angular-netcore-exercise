import { Injectable } from '@angular/core';
import { Action, State, StateContext } from "@ngxs/store";
import { InsuranceService } from './insurance.service';
import { Insurance } from './models/insurance';
import { AddInsurance } from './store/actions';
import { tap } from 'rxjs/operators';

@State<Insurance[]>({
    name: 'insurances',
    defaults: []
})
@Injectable()
export class InsurancesState {
    @Action(AddInsurance)
    addInsurance(ctx: StateContext<Insurance[]>, action: AddInsurance) {
        return this.insuranceService.addInsurance(action.insurance)
            .pipe(
                tap(addInsuranceResult => {
                    const state = ctx.getState();
                    ctx.setState([
                        ...state,
                        addInsuranceResult
                    ])
                })
            );
    }

    constructor(private insuranceService: InsuranceService) { }
}