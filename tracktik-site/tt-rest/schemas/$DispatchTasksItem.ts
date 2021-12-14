/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTasksItem = {
    properties: {
        customId: {
    type: 'string',
},
        taskType: {
    type: 'one-of',
    contains: [{
    type: 'TaskTypesId',
}, {
    type: 'TaskTypesItem',
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
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        client: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        priceTier: {
    type: 'one-of',
    contains: [{
    type: 'TaskPriceTiersId',
}, {
    type: 'TaskPriceTiersItem',
}],
},
        status: {
    type: 'Enum',
},
        active: {
    type: 'Enum',
},
        assignedUser: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        assignedGroup: {
    type: 'one-of',
    contains: [{
    type: 'GuidResourcesId',
}, {
    type: 'GuidResourcesItem',
}],
},
        assignedVendor: {
    type: 'one-of',
    contains: [{
    type: 'VendorsId',
}, {
    type: 'VendorsItem',
}],
},
        reportTemplate: {
    type: 'one-of',
    contains: [{
    type: 'ReportTemplatesId',
}, {
    type: 'ReportTemplatesItem',
}],
},
        report: {
    type: 'one-of',
    contains: [{
    type: 'ReportsId',
}, {
    type: 'ReportsItem',
}],
},
        workflowInstance: {
    type: 'one-of',
    contains: [{
    type: 'WorkflowInstancesId',
}, {
    type: 'WorkflowInstancesItem',
}],
},
        location: {
    type: 'one-of',
    contains: [{
    type: 'DispatchCustomLocationsId',
}, {
    type: 'DispatchCustomLocationsItem',
}],
},
        locationType: {
    type: 'Enum',
},
        notes: {
    type: 'array',
    contains: {
        type: 'CommentsItem',
    },
},
        logs: {
    type: 'array',
    contains: {
        type: 'DispatchTaskLogsItem',
    },
},
        closedOn: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
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
    type: 'TimeStampDate',
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
    type: 'TimeStampDate',
}],
},
    },
} as const;