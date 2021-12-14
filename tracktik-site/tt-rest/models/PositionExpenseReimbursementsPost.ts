/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';

export type PositionExpenseReimbursementsPost = {
    /**
     * Position
     */
    position: PositionsId;
    /**
     * Pay Code
     */
    payCode: PayrollCodesId;
}