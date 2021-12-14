/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { SkillCategoriesId } from './SkillCategoriesId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type SkillsCollection = {
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
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Archived
     */
    archived?: Boolean;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}