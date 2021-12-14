/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { RolesId } from './RolesId';
import type { RolesItem } from './RolesItem';
import type { Uri } from './Uri';

export type RoleAccessPoliciesItem = {
    /**
     * Authorization
     */
    authorization?: RoleAccessPoliciesItem.authorization;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Role: ID of the resource by default OR *on demand* JSON object of type [Roles](#operation/getOneRoles)
     */
    role?: (RolesId | RolesItem);
    /**
     * Scenario Code
     */
    scenarioCode?: RoleAccessPoliciesItem.scenarioCode;
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

export namespace RoleAccessPoliciesItem {

    /**
     * Authorization
     */
    export enum authorization {
        BLOCK_ALL_TIME = 'BLOCK_ALL_TIME',
        BLOCK_UNLESS_WHITELISTED = 'BLOCK_UNLESS_WHITELISTED',
        GRANT = 'GRANT',
    }

    /**
     * Scenario Code
     */
    export enum scenarioCode {
        LOGIN = 'LOGIN',
        ONSITE_ACCESS = 'ONSITE_ACCESS',
        KIOSK_ACCESS = 'KIOSK_ACCESS',
        API = 'API',
    }


}