/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type SkillCategoriesItem = {
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}