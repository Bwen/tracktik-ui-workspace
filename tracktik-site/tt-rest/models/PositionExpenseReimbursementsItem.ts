/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { Uri } from './Uri';

export type PositionExpenseReimbursementsItem = {
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Pay Code: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCode?: (PayrollCodesId | PayrollCodesItem);
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
}