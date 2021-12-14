/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PositionsId } from './PositionsId';
import type { SkillsId } from './SkillsId';

export type PositionSkillsPut = {
    /**
     * Position
     */
    position: PositionsId;
    /**
     * Skill
     */
    skill: SkillsId;
    /**
     * Type
     */
    type: PositionSkillsPut.type;
    /**
     * Comments
     */
    comments?: string;
}

export namespace PositionSkillsPut {

    /**
     * Type
     */
    export enum type {
        HARD = 'HARD',
        CONDITIONAL = 'CONDITIONAL',
        SOFT = 'SOFT',
    }


}