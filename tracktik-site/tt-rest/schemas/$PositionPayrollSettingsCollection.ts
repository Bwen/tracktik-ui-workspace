/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPayrollSettingsCollection = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        payPositionRate: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        positionHourlyRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        holiday: {
    type: 'Enum',
},
        holidayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        holidayMultiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        holidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
        payBreaks: {
    type: 'Enum',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;