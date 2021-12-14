/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrenceReassignmentsCollection = {
    /**
     * Mobile runsheet session
     */
    mobileRunsheetSession?: MobileRunsheetSessionsId;
    /**
     * Mobile schedule occurrence
     */
    mobileScheduleOccurrenceLog?: MobileScheduleOccurrenceLogsId;
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