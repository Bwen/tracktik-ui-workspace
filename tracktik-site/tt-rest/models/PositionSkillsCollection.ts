/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { PositionsId } from './PositionsId';
import type { SkillsId } from './SkillsId';

export type PositionSkillsCollection = {
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
    type?: PositionSkillsCollection.type;
    /**
     * Comments
     */
    comments?: string;
    /**
     * System ID
     */
    id?: Integer;
}

export namespace PositionSkillsCollection {

    /**
     * Type
     */
    export enum type {
        HARD = 'HARD',
        CONDITIONAL = 'CONDITIONAL',
        SOFT = 'SOFT',
    }


}