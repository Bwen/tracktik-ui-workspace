/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { HolidayDateToClassesItem } from './HolidayDateToClassesItem';
import type { HolidayGroupDateRelationsItem } from './HolidayGroupDateRelationsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type HolidayGroupsItem = {
    /**
     * Holiday Group Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Name
     */
    name?: Label;
    /**
     * This field was deprecated in favor of `holidayDateRelations`: *On demand*. List of JSON objects of type [HolidayDateToClasses](#operation/getOneHolidayDateToClasses)
     */
    summary?: Array<HolidayDateToClassesItem>;
    /**
     * A list of Holiday Group Date Relations: *On demand*. List of JSON objects of type [HolidayGroupDateRelations](#operation/getOneHolidayGroupDateRelations)
     */
    holidayDateRelations?: Array<HolidayGroupDateRelationsItem>;
    /**
     * Is Default
     */
    isDefault?: Boolean;
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