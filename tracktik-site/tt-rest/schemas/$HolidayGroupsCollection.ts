/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayGroupsCollection = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        isDefault: {
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