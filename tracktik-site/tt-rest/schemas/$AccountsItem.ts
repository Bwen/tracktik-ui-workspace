/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        subType: {
    type: 'Enum',
},
        address: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
}],
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        notes: {
    type: 'array',
    contains: {
        type: 'NotesItem',
    },
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsItem',
    },
},
        allowedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesItem',
    },
},
        restrictedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesItem',
    },
},
        ipWhitelist: {
    type: 'array',
    contains: {
        type: 'WhitelistedIpsItem',
    },
},
        dispatchSla: {
    type: 'one-of',
    contains: [{
    type: 'DispatchSlasId',
}, {
    type: 'DispatchSlasItem',
}],
},
        closedDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
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
        avatar: {
    type: 'all-of',
    contains: [{
    type: 'Image',
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