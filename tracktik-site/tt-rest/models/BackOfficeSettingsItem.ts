/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { Hours } from './Hours';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { OvertimeRulesItem } from './OvertimeRulesItem';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { PayrollSchedulesItem } from './PayrollSchedulesItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { Uri } from './Uri';

export type BackOfficeSettingsItem = {
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Choose a cycle first date
     */
    scheduleCycleFirstDate?: BackOfficeSettingsItem.scheduleCycleFirstDate;
    /**
     * Schedule template first day of week
     */
    scheduleTemplateFirstDayOfWeek?: Date;
    /**
     * Preferred schedule publishing frequency
     */
    schedulePreferredPublishFrequency?: BackOfficeSettingsItem.schedulePreferredPublishFrequency;
    /**
     * Allow scheduling for closed business days
     */
    scheduleAllowForClosedBusinessDays?: Boolean;
    /**
     * Request employee schedule acknowlegement
     */
    scheduleRequestEmployeeAcknowledge?: Boolean;
    /**
     * Minimum rest period between shifts (in hours)
     */
    scheduleMinimumRestPeriodBetweenShift?: Hours;
    /**
     * Default holiday group (for positions only): ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    scheduleHolidayGroup?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * Default employee hourly rate
     */
    payrollHourlyRate?: Decimal;
    /**
     * Default pay schedule: ID of the resource by default OR *on demand* JSON object of type [PayrollSchedules](#operation/getOnePayrollSchedules)
     */
    payrollSchedule?: (PayrollSchedulesId | PayrollSchedulesItem);
    /**
     * Default overtime rule: ID of the resource by default OR *on demand* JSON object of type [OvertimeRules](#operation/getOneOvertimeRules)
     */
    payrollOvertimeRule?: (OvertimeRulesId | OvertimeRulesItem);
    /**
     * Overtime start day of week
     */
    payrollOvertimeDayOfWeek?: BackOfficeSettingsItem.payrollOvertimeDayOfWeek;
    /**
     * Auto-Approval Shifts and adjust to the schedule time when inside the ranges of `autoApprovalClockInBefore` - `autoApprovalClockInAfter` and `autoApprovalClockOutBefore` - `autoApprovalClockOutAfter`
     */
    autoApprovalShift?: Boolean;
    /**
     * Auto-Approval grace period (in mins) for clock-in before the beginning of the Shift. Only `required` if `autoApprovalShift` is `true`.
     */
    autoApprovalClockInBefore?: Minutes;
    /**
     * Auto-Approval grace period (in mins) for clock-in after the beginning of the Shift. Only `required` if `autoApprovalShift` is `true`.
     */
    autoApprovalClockInAfter?: Minutes;
    /**
     * Auto-Approval grace period (in mins) for clock-out before the end of the Shift. Only `required` if `autoApprovalShift` is `true`.
     */
    autoApprovalClockOutBefore?: Minutes;
    /**
     * Auto-Approval grace period (in mins) for clock-out after the end of the Shift. Only `required` if `autoApprovalShift` is `true`.
     */
    autoApprovalClockOutAfter?: Minutes;
    /**
     * Payroll sorting
     */
    payrollSorting?: BackOfficeSettingsItem.payrollSorting;
    /**
     * Show premiums separately from regular hours in payroll
     */
    payrollSeparatePremium?: Boolean;
    /**
     * Billing tax engine
     */
    billingTaxEngine?: Label;
    /**
     * Billing default tax class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    billingTaxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Billing base currency
     */
    billingBaseCurrency?: BackOfficeSettingsItem.billingBaseCurrency;
    /**
     * Show premiums separately in invoices
     */
    billingSeparatePremium?: Boolean;
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

export namespace BackOfficeSettingsItem {

    /**
     * Choose a cycle first date
     */
    export enum scheduleCycleFirstDate {
        _7_DAYS = '7 DAYS',
        _14_DAYS = '14 DAYS',
    }

    /**
     * Preferred schedule publishing frequency
     */
    export enum schedulePreferredPublishFrequency {
        WEEKLY = 'WEEKLY',
        BI_WEEKLY = 'BI-WEEKLY',
        TRI_WEEKLY = 'TRI-WEEKLY',
        QUADRI_WEEKLY = 'QUADRI-WEEKLY',
        MONTHLY = 'MONTHLY',
    }

    /**
     * Overtime start day of week
     */
    export enum payrollOvertimeDayOfWeek {
        SUNDAY = 'SUNDAY',
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
    }

    /**
     * Payroll sorting
     */
    export enum payrollSorting {
        DEFAULT = 'DEFAULT',
        EMPLOYEE_ID = 'EMPLOYEE ID',
        EMPLOYEE_LAST_NAME = 'EMPLOYEE LAST NAME',
        EMPLOYEE_FIRST_NAME = 'EMPLOYEE FIRST NAME',
    }

    /**
     * Billing base currency
     */
    export enum billingBaseCurrency {
        BHD = 'BHD',
        GBP = 'GBP',
        CAD = 'CAD',
        EUR = 'EUR',
        CHF = 'CHF',
        USD = 'USD',
        AFA = 'AFA',
        AWG = 'AWG',
        AUD = 'AUD',
        ARS = 'ARS',
        AZN = 'AZN',
        BSD = 'BSD',
        BDT = 'BDT',
        BBD = 'BBD',
        BYR = 'BYR',
        BOB = 'BOB',
        BRL = 'BRL',
        BGN = 'BGN',
        KHR = 'KHR',
        KYD = 'KYD',
        CLP = 'CLP',
        CNY = 'CNY',
        COP = 'COP',
        CRC = 'CRC',
        HRK = 'HRK',
        CPY = 'CPY',
        CZK = 'CZK',
        DKK = 'DKK',
        DOP = 'DOP',
        XCD = 'XCD',
        EGP = 'EGP',
        ERN = 'ERN',
        EEK = 'EEK',
        GEL = 'GEL',
        GHC = 'GHC',
        GIP = 'GIP',
        GTQ = 'GTQ',
        HNL = 'HNL',
        HKD = 'HKD',
        HUF = 'HUF',
        ISK = 'ISK',
        INR = 'INR',
        IDR = 'IDR',
        ILS = 'ILS',
        JMD = 'JMD',
        JPY = 'JPY',
        KZT = 'KZT',
        KES = 'KES',
        KWD = 'KWD',
        LVL = 'LVL',
        LBP = 'LBP',
        LTL = 'LTL',
        MOP = 'MOP',
        MKD = 'MKD',
        MGA = 'MGA',
        MYR = 'MYR',
        MTL = 'MTL',
        BAM = 'BAM',
        MUR = 'MUR',
        MXN = 'MXN',
        MZM = 'MZM',
        NPR = 'NPR',
        ANG = 'ANG',
        TWD = 'TWD',
        NZD = 'NZD',
        NIO = 'NIO',
        NGN = 'NGN',
        KPW = 'KPW',
        NOK = 'NOK',
        OMR = 'OMR',
        PKR = 'PKR',
        PYG = 'PYG',
        PEN = 'PEN',
        PHP = 'PHP',
        QAR = 'QAR',
        RON = 'RON',
        RUB = 'RUB',
        SAR = 'SAR',
        CSD = 'CSD',
        SCR = 'SCR',
        SGD = 'SGD',
        SKK = 'SKK',
        SIT = 'SIT',
        ZAR = 'ZAR',
        KRW = 'KRW',
        LKR = 'LKR',
        SRD = 'SRD',
        SEK = 'SEK',
        TZS = 'TZS',
        THB = 'THB',
        TTD = 'TTD',
        TRY = 'TRY',
        AED = 'AED',
        UGX = 'UGX',
        UAH = 'UAH',
        UYU = 'UYU',
        UZS = 'UZS',
        VEB = 'VEB',
        VND = 'VND',
        AMK = 'AMK',
        ZWD = 'ZWD',
    }


}