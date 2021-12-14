/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTasksPatch = {
    properties: {
        customId: {
    type: 'string',
},
        taskType: {
    type: 'all-of',
    contains: [{
    type: 'TaskTypesId',
}],
},
        priority: {
    type: 'Enum',
},
        taskInstructions: {
    type: 'string',
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        plannedDurationInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        reminderInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        alarmOrganization: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        priceTier: {
    type: 'all-of',
    contains: [{
    type: 'TaskPriceTiersId',
}],
},
        status: {
    type: 'Enum',
},
        active: {
    type: 'Enum',
},
        assignedUser: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        assignedGroup: {
    type: 'all-of',
    contains: [{
    type: 'GuidResourcesId',
}],
},
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
},
        report: {
    type: 'all-of',
    contains: [{
    type: 'ReportsId',
}],
},
        location: {
    type: 'all-of',
    contains: [{
    type: 'DispatchCustomLocationsPatch',
}],
},
        locationType: {
    type: 'Enum',
},
    },
} as const;