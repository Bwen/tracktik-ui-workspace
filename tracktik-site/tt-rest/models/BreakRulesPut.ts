/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRuleConditionsId } from './BreakRuleConditionsId';
import type { Date } from './Date';
import type { PositionsId } from './PositionsId';
import type { RegionsId } from './RegionsId';

export type BreakRulesPut = {
    /**
     * Name
     */
    name: string;
    /**
     * Status
     */
    status?: BreakRulesPut.status;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Effective Date
     */
    effectiveDate?: Date;
    /**
     * Conditions
     */
    conditions?: Array<BreakRuleConditionsId>;
    /**
     * Positions
     */
    positions?: Array<PositionsId>;
}

export namespace BreakRulesPut {

    /**
     * Status
     */
    export enum status {
        INACTIVE = 'INACTIVE',
        ACTIVE = 'ACTIVE',
    }


}