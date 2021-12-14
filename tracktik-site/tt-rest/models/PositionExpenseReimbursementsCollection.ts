/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';
import type { Uri } from './Uri';

export type PositionExpenseReimbursementsCollection = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Pay Code
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
}