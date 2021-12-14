/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionPremiumsCollection = {
    /**
     * Status
     */
    status?: PositionPremiumsCollection.status;
    /**
     * Type
     */
    type?: PositionPremiumsCollection.type;
    /**
     * Code
     */
    code?: string;
    /**
     * Name
     */
    name?: Label;
    /**
     * This field was deprecated in favor of `rate`
     */
    amount?: Decimal;
    /**
     * The position premium rate
     */
    rate?: Decimal;
    /**
     * Include in Overtime Calculations
     */
    isOvertime?: string;
    /**
     * PayCode
     */
    payCode?: PayrollCodesId;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionPremiumsCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }

    /**
     * Type
     */
    export enum type {
        PAY_HOURLY = 'PAY_HOURLY',
        BILL_HOURLY = 'BILL_HOURLY',
        PAY_ADHOC = 'PAY_ADHOC',
    }


}