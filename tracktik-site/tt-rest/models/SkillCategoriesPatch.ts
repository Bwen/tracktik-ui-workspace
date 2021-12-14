/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type SkillCategoriesPatch = {
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * The Skill Category Name
     */
    name?: Label;
    /**
     * Description
     */
    description?: Label;
}