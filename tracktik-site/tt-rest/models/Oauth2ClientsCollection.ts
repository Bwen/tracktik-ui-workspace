/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type Oauth2ClientsCollection = {
    /**
     * Identifier
     */
    identifier?: Label;
    /**
     * Secret
     */
    secret?: Label;
    /**
     * Name
     */
    name?: Label;
    /**
     * Description
     */
    description?: Label;
    /**
     * Logo
     */
    logo?: Image;
    /**
     * Active
     */
    active?: Boolean;
    /**
     * Redirect Uris
     */
    redirectUris?: JSON;
    /**
     * Active
     */
    grants?: JSON;
    /**
     * Scopes
     */
    scopes?: JSON;
    /**
     * Post Logout Redirect Uris
     */
    postLogoutRedirectUris?: JSON;
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