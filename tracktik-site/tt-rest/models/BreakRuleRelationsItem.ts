/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { BreakRulesItem } from './BreakRulesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type BreakRuleRelationsItem = {
    /**
     * Break Rule: ID of the resource by default OR *on demand* JSON object of type [BreakRules](#operation/getOneBreakRules)
     */
    breakRule?: (BreakRulesId | BreakRulesItem);
    /**
     * label
     */
    relation?: BreakRuleRelationsItem.relation;
    /**
     * Relation Id
     */
    relationId?: Integer;
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

export namespace BreakRuleRelationsItem {

    /**
     * label
     */
    export enum relation {
        POSITION = 'POSITION',
    }


}