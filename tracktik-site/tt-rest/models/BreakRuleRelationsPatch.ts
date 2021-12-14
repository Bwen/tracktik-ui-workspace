/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Integer } from './Integer';

export type BreakRuleRelationsPatch = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * label
     */
    relation?: BreakRuleRelationsPatch.relation;
    /**
     * Relation Id
     */
    relationId?: Integer;
}

export namespace BreakRuleRelationsPatch {

    /**
     * label
     */
    export enum relation {
        POSITION = 'POSITION',
    }


}