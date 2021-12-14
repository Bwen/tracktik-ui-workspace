/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PositionsId } from './PositionsId';
import type { SkillsId } from './SkillsId';

export type PositionSkillsPatch = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Skill
     */
    skill?: SkillsId;
    /**
     * Type
     */
    type?: PositionSkillsPatch.type;
    /**
     * Comments
     */
    comments?: string;
}

export namespace PositionSkillsPatch {

    /**
     * Type
     */
    export enum type {
        HARD = 'HARD',
        CONDITIONAL = 'CONDITIONAL',
        SOFT = 'SOFT',
    }


}