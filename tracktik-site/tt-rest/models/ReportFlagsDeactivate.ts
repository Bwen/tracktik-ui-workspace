/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReportFlagsDeactivate = {
    /**
     * These are the actions available to the reports that have
 * * the Report Flag that is beign archived
     */
    onReports: ReportFlagsDeactivate.onReports;
    /**
     * New Report Flag Id
     */
    newReportFlagId?: number;
}

export namespace ReportFlagsDeactivate {

    /**
     * These are the actions available to the reports that have
 * * the Report Flag that is beign archived
     */
    export enum onReports {
        REMAIN = 'REMAIN',
        ARCHIVE = 'ARCHIVE',
        NEW_REPORT_FLAG = 'NEW_REPORT_FLAG',
    }


}