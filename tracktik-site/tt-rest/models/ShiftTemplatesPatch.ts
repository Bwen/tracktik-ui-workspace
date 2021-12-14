/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { Minutes } from './Minutes';
import type { Number } from './Number';
import type { PositionsId } from './PositionsId';
import type { PositionSkillsId } from './PositionSkillsId';
import type { Time } from './Time';

export type ShiftTemplatesPatch = {
    /**
     * The work post for this shift template
     */
    position?: PositionsId;
    /**
     * Start Time
     */
    startTime?: Time;
    /**
     * End Time
     */
    endTime?: Time;
    /**
     * Start Day Index
     */
    startDayIndex?: Number;
    /**
     * The employee assigned to the shift template
     */
    employee?: EmployeesId;
    /**
     * If the shift template is vacant
     */
    vacant?: Boolean;
    /**
     * If the shift template is available on the shiftboard
     */
    onShiftBoard?: Boolean;
    /**
     * The number of minutes allocated for breaks
     */
    breakInMinutes?: Minutes;
    /**
     * Position Skills
     */
    positionSkills?: Array<PositionSkillsId>;
}