/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestTypesPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        payrollCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        paidTimeOff: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        hourly: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        salary: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;