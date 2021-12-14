/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeeClassesId } from './EmployeeClassesId';
import type { EmployeeClassesItem } from './EmployeeClassesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { EmploymentTerminationReasonsId } from './EmploymentTerminationReasonsId';
import type { EmploymentTerminationReasonsItem } from './EmploymentTerminationReasonsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { OvertimeRulesItem } from './OvertimeRulesItem';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { PayrollSchedulesItem } from './PayrollSchedulesItem';
import type { Uri } from './Uri';

export type EmploymentProfilesItem = {
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Employee Type
     */
    employeeType?: EmploymentProfilesItem.employeeType;
    /**
     * Employee class: ID of the resource by default OR *on demand* JSON object of type [EmployeeClasses](#operation/getOneEmployeeClasses)
     */
    employeeClass?: (EmployeeClassesId | EmployeeClassesItem);
    /**
     * Employment Date
     */
    employmentDate?: Date;
    /**
     * Duration of Employment (Days)
     */
    seniority?: Decimal;
    /**
     * Pay Rate Type
     */
    payRateType?: EmploymentProfilesItem.payRateType;
    /**
     * Pay Rate Type
     */
    hourlyRateType?: EmploymentProfilesItem.hourlyRateType;
    /**
     * Default Pay Rate
     */
    hourlyRate?: CurrencyRate;
    /**
     * Yearly Salary
     */
    yearlyPayRate?: CurrencyRate;
    /**
     * Overtime Exempt
     */
    overtimeExempt?: Boolean;
    /**
     * Leave blank to use the default region schedule: ID of the resource by default OR *on demand* JSON object of type [PayrollSchedules](#operation/getOnePayrollSchedules)
     */
    payrollSchedule?: (PayrollSchedulesId | PayrollSchedulesItem);
    /**
     * Grievance
     */
    hasGrievance?: Boolean;
    /**
     * Target hours per week
     */
    weeklyHoursTarget?: Integer;
    /**
     * Maximum hours per week
     */
    weeklyHoursMaximum?: Integer;
    /**
     * Minimum hours per week
     */
    weeklyHoursMinimum?: Integer;
    /**
     * Overtime Rule: ID of the resource by default OR *on demand* JSON object of type [OvertimeRules](#operation/getOneOvertimeRules)
     */
    overtimeRule?: (OvertimeRulesId | OvertimeRulesItem);
    /**
     * Termination Date
     */
    terminationDate?: Date;
    /**
     * Employment Termination Reason: ID of the resource by default OR *on demand* JSON object of type [EmploymentTerminationReasons](#operation/getOneEmploymentTerminationReasons)
     */
    terminationReason?: (EmploymentTerminationReasonsId | EmploymentTerminationReasonsItem);
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

export namespace EmploymentProfilesItem {

    /**
     * Employee Type
     */
    export enum employeeType {
        EMPLOYEE = 'EMPLOYEE',
        CONTRACTOR = 'CONTRACTOR',
    }

    /**
     * Pay Rate Type
     */
    export enum payRateType {
        HOURLY = 'HOURLY',
        SALARY = 'SALARY',
    }

    /**
     * Pay Rate Type
     */
    export enum hourlyRateType {
        DEFAULT = 'DEFAULT',
        EMPLOYEE_GROUP = 'EMPLOYEE_GROUP',
        EMPLOYEE_SPECIFIC = 'EMPLOYEE_SPECIFIC',
    }


}