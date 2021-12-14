/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteSettingsItem = {
    properties: {
        site: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        defaultInstructions: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dispatchSlaCategory: {
    type: 'one-of',
    contains: [{
    type: 'DispatchSlasId',
}, {
    type: 'DispatchSlasItem',
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
        taskInstructions: {
    type: 'one-of',
    contains: [{
    type: 'TaskSiteInstructionsId',
}, {
    type: 'TaskSiteInstructionsItem',
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