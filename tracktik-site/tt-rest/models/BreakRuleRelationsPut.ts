/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Integer } from './Integer';

export type BreakRuleRelationsPut = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * label
     */
    relation?: BreakRuleRelationsPut.relation;
    /**
     * Relation Id
     */
    relationId?: Integer;
}

export namespace BreakRuleRelationsPut {

    /**
     * label
     */
    export enum relation {
        POSITION = 'POSITION',
    }


}