/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Oauth2ClientsId } from './Oauth2ClientsId';
import type { Oauth2ClientsItem } from './Oauth2ClientsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { UsersId } from './UsersId';
import type { UsersItem } from './UsersItem';

export type Oauth2AccessTokensItem = {
    /**
     * Identifier
     */
    identifier?: Label;
    /**
     * Expiry Date
     */
    expiresOn?: TimeStampDate;
    /**
     * OAuth2 Client: ID of the resource by default OR *on demand* JSON object of type [Oauth2Clients](#operation/getOneOauth2Clients)
     */
    client?: (Oauth2ClientsId | Oauth2ClientsItem);
    /**
     * Token Owner: ID of the resource by default OR *on demand* JSON object of type [Users](#operation/getOneUsers)
     */
    user?: (UsersId | UsersItem);
    /**
     * Scopes
     */
    scopes?: JSON;
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