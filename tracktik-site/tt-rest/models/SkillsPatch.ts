/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { SkillCategoriesId } from './SkillCategoriesId';

export type SkillsPatch = {
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Category
     */
    category?: SkillCategoriesId;
    /**
     * Name
     */
    name?: Label;
    /**
     * Date Field Label
     */
    dateLabel?: Label;
    /**
     * Field Label
     */
    label1?: Label;
    /**
     * Other Field Label
     */
    label2?: Label;
    /**
     * This field is deprecated because is not used
     */
    label3?: Label;
}