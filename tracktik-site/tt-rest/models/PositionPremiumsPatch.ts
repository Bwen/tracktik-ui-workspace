/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';

export type PositionPremiumsPatch = {
    /**
     * Status
     */
    status?: PositionPremiumsPatch.status;
    /**
     * Type
     */
    type?: PositionPremiumsPatch.type;
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
     * Positions
     */
    positions?: Array<PositionsId>;
}

export namespace PositionPremiumsPatch {

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