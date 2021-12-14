/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MobileRunsheetSessionsId } from './MobileRunsheetSessionsId';
import type { MobileScheduleOccurrenceLogsId } from './MobileScheduleOccurrenceLogsId';

export type MobileScheduleOccurrenceReassignmentsPost = {
    /**
     * Mobile runsheet session
     */
    mobileRunsheetSession?: MobileRunsheetSessionsId;
    /**
     * Mobile schedule occurrence
     */
    mobileScheduleOccurrenceLog?: MobileScheduleOccurrenceLogsId;
}