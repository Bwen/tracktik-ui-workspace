/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { SkillsId } from './SkillsId';
import type { SkillsItem } from './SkillsItem';

export type PositionSkillsItem = {
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Skill: ID of the resource by default OR *on demand* JSON object of type [Skills](#operation/getOneSkills)
     */
    skill?: (SkillsId | SkillsItem);
    /**
     * Type
     */
    type?: PositionSkillsItem.type;
    /**
     * Comments
     */
    comments?: string;
    /**
     * System ID
     */
    id?: Integer;
}

export namespace PositionSkillsItem {

    /**
     * Type
     */
    export enum type {
        HARD = 'HARD',
        CONDITIONAL = 'CONDITIONAL',
        SOFT = 'SOFT',
    }


}