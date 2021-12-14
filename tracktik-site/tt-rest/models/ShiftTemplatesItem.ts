/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { Number } from './Number';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { PositionSkillsItem } from './PositionSkillsItem';
import type { Time } from './Time';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftTemplatesItem = {
    /**
     * The work post for this shift template: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Start Time
     */
    startTime?: Time;
    /**
     * End Time
     */
    endTime?: Time;
    /**
     * Start Day Index
     */
    startDayIndex?: Number;
    /**
     * Start Day Label
     */
    startDayLabel?: Label;
    /**
     * End Day Index
     */
    endDayIndex?: Integer;
    /**
     * End Day Label
     */
    endDayLabel?: Label;
    /**
     * Begin Date
     */
    beginDate?: Date;
    /**
     * End Date
     */
    endDate?: Date;
    /**
     * The employee assigned to the shift template: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * If the shift template is vacant
     */
    vacant?: Boolean;
    /**
     * If the shift template is available on the shiftboard
     */
    onShiftBoard?: Boolean;
    /**
     * The number of minutes allocated for breaks
     */
    breakInMinutes?: Minutes;
    /**
     * Position Skills: *On demand*. List of JSON objects of type [PositionSkills](#operation/getOnePositionSkills)
     */
    positionSkills?: Array<PositionSkillsItem>;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}