import { Insurance } from './../models/insurance';

export class AddInsurance {
    static readonly type = 'Add Insurance';
    constructor(public insurance: Insurance) { }
}