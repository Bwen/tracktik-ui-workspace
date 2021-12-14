/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { Number } from './Number';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftTemplatesCollection = {
    /**
     * The work post for this shift template
     */
    position?: PositionsId;
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
     * The employee assigned to the shift template
     */
    employee?: EmployeesId;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}