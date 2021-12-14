/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Label } from './Label';

export type EmploymentTerminationReasonsPatch = {
    /**
     * The Termination Reason Name
     */
    name?: Label;
    /**
     * Is Voluntary
     */
    isVoluntary?: Boolean;
    /**
     * Comment Required
     */
    commentRequired?: Boolean;
}