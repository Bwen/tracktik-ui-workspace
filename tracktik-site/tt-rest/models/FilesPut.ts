/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type FilesPut = {
    /**
     * File URL
     */
    url?: Label;
    /**
     * When attached to an object it identify the file, example: avatar, logo, etc.
     */
    tag?: Label;
    /**
     * File format or extension
     */
    format?: Label;
}