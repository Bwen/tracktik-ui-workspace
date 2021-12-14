/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventsSubscriptionsItem = {
    properties: {
        customId: {
    type: 'string',
},
        name: {
    type: 'string',
},
        events: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        entityResponse: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        contextFilters: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        userDefinedFilters: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        url: {
    type: 'string',
},
        failureEmail: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        lastTriggeredOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        lastTriggeredTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        logs: {
    type: 'array',
    contains: {
        type: 'EventsSubscriptionLogsItem',
    },
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;