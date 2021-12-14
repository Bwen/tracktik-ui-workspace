/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteSettingsPost = {
    properties: {
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
        taskInstructions: {
    type: 'all-of',
    contains: [{
    type: 'TaskSiteInstructionsId',
}],
},
    },
} as const;