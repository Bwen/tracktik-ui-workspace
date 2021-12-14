/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PositionsId } from './PositionsId';
import type { SkillsId } from './SkillsId';

export type PositionSkillsPost = {
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
    type: PositionSkillsPost.type;
    /**
     * Comments
     */
    comments?: string;
}

export namespace PositionSkillsPost {

    /**
     * Type
     */
    export enum type {
        HARD = 'HARD',
        CONDITIONAL = 'CONDITIONAL',
        SOFT = 'SOFT',
    }


}