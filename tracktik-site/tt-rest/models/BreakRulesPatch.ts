/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRuleConditionsId } from './BreakRuleConditionsId';
import type { Date } from './Date';
import type { PositionsId } from './PositionsId';
import type { RegionsId } from './RegionsId';

export type BreakRulesPatch = {
    /**
     * Name
     */
    name?: string;
    /**
     * Status
     */
    status?: BreakRulesPatch.status;
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

export namespace BreakRulesPatch {

    /**
     * Status
     */
    export enum status {
        INACTIVE = 'INACTIVE',
        ACTIVE = 'ACTIVE',
    }


}