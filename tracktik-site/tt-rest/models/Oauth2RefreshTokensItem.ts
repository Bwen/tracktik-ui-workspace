/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Oauth2RefreshTokensId } from './Oauth2RefreshTokensId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type Oauth2RefreshTokensItem = {
    /**
     * Identifier
     */
    identifier?: Label;
    /**
     * Expiry Date
     */
    expiresOn?: TimeStampDate;
    /**
     * OAuth2 Access Token: ID of the resource by default OR *on demand* JSON object of type [Oauth2RefreshTokens](#operation/getOneOauth2RefreshTokens)
     */
    accessToken?: (Oauth2RefreshTokensId | Oauth2RefreshTokensItem);
    /**
     * Has the token been revoked?
     */
    isRevoked?: Boolean;
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
}