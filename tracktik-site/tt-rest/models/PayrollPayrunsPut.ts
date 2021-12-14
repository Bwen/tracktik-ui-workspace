/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { PayrollPayrunItemsId } from './PayrollPayrunItemsId';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { RegionsId } from './RegionsId';

export type PayrollPayrunsPut = {
    /**
     * Payroll Schedule
     */
    payrollSchedule?: PayrollSchedulesId;
    /**
     * Occurence Date
     */
    occurrenceDate?: Date;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Items
     */
    items?: Array<PayrollPayrunItemsId>;
}