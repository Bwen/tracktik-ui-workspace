/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Uri } from './Uri';

export type TwilioAccountsItem = {
    /**
     * Region id where the Twilio SID is used
     */
    id?: Label;
    /**
     * SID to identify which account to use on Twilio's side
     */
    sid?: Label;
    /**
     * Auth Token to make all the calls to Twilio
     */
    token?: Label;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}