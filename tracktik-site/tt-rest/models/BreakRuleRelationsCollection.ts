/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type BreakRuleRelationsCollection = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * label
     */
    relation?: BreakRuleRelationsCollection.relation;
    /**
     * Relation Id
     */
    relationId?: Integer;
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

export namespace BreakRuleRelationsCollection {

    /**
     * label
     */
    export enum relation {
        POSITION = 'POSITION',
    }


}