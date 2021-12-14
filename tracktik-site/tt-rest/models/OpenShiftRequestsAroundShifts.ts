/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Display previous and next shift information
 */
export type OpenShiftRequestsAroundShifts = {
    /**
     * Previous shift based on requested shift
     */
    previous?: {
/**
 * Shift Id
 */
id?: number;
/**
 * Shift Start Date time
 */
startLabel?: string;
/**
 * Shift Label
 */
label?: string;
/**
 * Shift start unix timestamp
 */
startsOn?: string;
/**
 * Shift end unix timestamp
 */
endsOn?: string;
};
    /**
     * Next shift based on requested shift
     */
    next?: {
/**
 * Shift Id
 */
id?: number;
/**
 * Shift Start Date time
 */
startLabel?: string;
/**
 * Shift Label
 */
label?: string;
/**
 * Shift start unix timestamp
 */
startsOn?: string;
/**
 * Shift end unix timestamp
 */
endsOn?: string;
};
}