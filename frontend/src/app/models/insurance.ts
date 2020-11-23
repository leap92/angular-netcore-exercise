import * as moment from "moment";

export interface Insurance {
    id?: number;
    powerUnits: number;
    proposedEffectiveDate: moment.Moment;
    proposedExpirationDate: moment.Moment;
    businessName: string;
    businessDescription: string;
}