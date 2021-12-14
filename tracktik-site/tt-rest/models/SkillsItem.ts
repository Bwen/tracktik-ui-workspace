/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { SkillCategoriesId } from './SkillCategoriesId';
import type { SkillCategoriesItem } from './SkillCategoriesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type SkillsItem = {
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * Category: ID of the resource by default OR *on demand* JSON object of type [SkillCategories](#operation/getOneSkillCategories)
     */
    category?: (SkillCategoriesId | SkillCategoriesItem);
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
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Archived
     */
    archived?: Boolean;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}