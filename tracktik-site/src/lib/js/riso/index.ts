import { COUNTRIES } from './countries';
import { SUBDIVISIONS } from './subdivisions';

function getSubdivisionByCode(code: string) {
    for (let i=0; i < SUBDIVISIONS.length; i++) {
        if (SUBDIVISIONS[i].code == code) {
            return SUBDIVISIONS[i];
        }
    }

    return undefined;
}

function getCountryByAlpha2(alpha2: string) {
    for (let i=0; i < COUNTRIES.length; i++) {
        if (COUNTRIES[i].alpha2 == alpha2) {
            return COUNTRIES[i];
        }
    }

    return undefined;
}

export {
    getCountryByAlpha2,
    getSubdivisionByCode,
};
