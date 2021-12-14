/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileRunsheetSessionsItem } from './MobileRunsheetSessionsItem';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';
import type { MobileScheduleOccurrenceLogsItem } from './MobileScheduleOccurrenceLogsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileScheduleOccurrenceReassignmentsItem = {
    /**
     * Mobile runsheet session: ID of the resource by default OR *on demand* JSON object of type [MobileRunsheetSessions](#operation/getOneMobileRunsheetSessions)
     */
    mobileRunsheetSession?: (MobileRunsheetSessionsId | MobileRunsheetSessionsItem);
    /**
     * Mobile schedule occurrence: ID of the resource by default OR *on demand* JSON object of type [MobileScheduleOccurrenceLogs](#operation/getOneMobileScheduleOccurrenceLogs)
     */
    mobileScheduleOccurrenceLog?: (MobileScheduleOccurrenceLogsId | MobileScheduleOccurrenceLogsItem);
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