/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteSettingsCollection = {
    properties: {
        site: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        defaultInstructions: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dispatchSlaCategory: {
    type: 'all-of',
    contains: [{
    type: 'DispatchSlasId',
}],
},
        alarmOrganization: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        dispatchBanned: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
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