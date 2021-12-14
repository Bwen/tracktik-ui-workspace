/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';
import type { RolesId } from './RolesId';

export type RoleAccessPoliciesPatch = {
    /**
     * Authorization
     */
    authorization?: RoleAccessPoliciesPatch.authorization;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Role
     */
    role?: RolesId;
    /**
     * Scenario Code
     */
    scenarioCode?: RoleAccessPoliciesPatch.scenarioCode;
}

export namespace RoleAccessPoliciesPatch {

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