/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type SkillCategoriesCollection = {
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
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}