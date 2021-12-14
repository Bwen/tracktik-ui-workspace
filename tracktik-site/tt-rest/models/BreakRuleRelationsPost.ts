/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Integer } from './Integer';

export type BreakRuleRelationsPost = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * label
     */
    relation?: BreakRuleRelationsPost.relation;
    /**
     * Relation Id
     */
    relationId?: Integer;
}

export namespace BreakRuleRelationsPost {

    /**
     * label
     */
    export enum relation {
        POSITION = 'POSITION',
    }


}