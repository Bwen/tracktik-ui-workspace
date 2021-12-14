/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Uri } from './Uri';

export type TwilioAccountsCollection = {
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
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}