/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileDevicesItem = {
    properties: {
        applicationId: {
    type: 'Enum',
},
        name: {
    type: 'string',
},
        number: {
    type: 'string',
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        user: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        lastLatitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
},
        lastLongitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        status: {
    type: 'Enum',
},
        applicationVersion: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        deviceModel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        deviceOS: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        deviceIMEI: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        installationCode: {
    type: 'string',
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