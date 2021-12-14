/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PositionsItem } from './PositionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionPremiumsItem = {
    /**
     * Status
     */
    status?: PositionPremiumsItem.status;
    /**
     * Type
     */
    type?: PositionPremiumsItem.type;
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
     * PayCode: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCode?: (PayrollCodesId | PayrollCodesItem);
    /**
     * Positions: *On demand*. List of JSON objects of type [Positions](#operation/getOnePositions)
     */
    positions?: Array<PositionsItem>;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionPremiumsItem {

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