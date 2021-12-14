/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileDevicesCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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