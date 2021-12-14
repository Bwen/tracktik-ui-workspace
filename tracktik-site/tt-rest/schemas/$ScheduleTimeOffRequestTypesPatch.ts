/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestTypesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        payrollCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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