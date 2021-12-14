/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ScheduleTimeOffRequestTypesItem = {
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