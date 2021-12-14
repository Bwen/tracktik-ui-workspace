/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Oauth2RefreshTokensId } from './Oauth2RefreshTokensId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type Oauth2RefreshTokensCollection = {
    /**
     * Identifier
     */
    identifier?: Label;
    /**
     * Expiry Date
     */
    expiresOn?: TimeStampDate;
    /**
     * OAuth2 Access Token
     */
    accessToken?: Oauth2RefreshTokensId;
    /**
     * Has the token been revoked?
     */
    isRevoked?: Boolean;
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
}