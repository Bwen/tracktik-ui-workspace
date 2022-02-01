import { request, METHODS } from '$lib/js/restClient';
import { v4 as uuidv4 } from 'uuid';
import employeListJson from '$dataLab/predefined/ttui-employee-list';

const jsonMap = {
    'ttui-employee-list': employeListJson,
};

async function initializeDataLabSection(id: string) {
    let categoryId = null;
    // Check if category already exists
    let res = await request('/data-view-categories', METHODS.GET, {name: id});
    if (res.ok) {
        let result = await res.json();
        if (result.data.length) {
            categoryId = result.data[0].id;
        } else { // Create data-lab category
            res = await request('/data-view-categories', METHODS.POST, {name: id});
            if (res.ok) {
                result = await res.json();
                if (result.data.length) {
                    categoryId = result.data[0].id;
                }
            }
        }
    } else {
        return [];
    }

    let dataSets = [];
    if (Object.hasOwnProperty.call(jsonMap, id)) {
        dataSets = jsonMap[id];
        for (let i=0; i < dataSets.length; i++) {
            dataSets[i].uid = uuidv4();
            dataSets[i].configs.uid = dataSets[i].uid;
            dataSets[i].category = categoryId;
            await request('/data-views', METHODS.POST, dataSets[i]);
        }
    }

    return dataSets;
}

export async function fetchDataSets(id: string) {
    
    const res = await request('/data-views', METHODS.GET, {
        'include': 'category',
        'category.name': id,
    });

    let dataSets = [];
    if (res.ok) {
        let result = await res.json();
        dataSets = result.data;

        // if the view as not been initialized, do so with the predefied datasets if any
        if (!dataSets.length) {
            dataSets = await initializeDataLabSection(id);
        }
    }

    return dataSets;
}

export function fetchResults(dataSet) {
    const tql = generateTql(dataSet);
    
    console.log(tql);
    return tql;
}

function generateTql(dataSet): string {
    console.log(dataSet);
    let select = generateTqlSelect(dataSet);
    let where = generateTqlWhere(dataSet);
    return `SELECT ${select} FROM ${dataSet.resource} ${where}`;
}

function generateTqlSelect(dataSet): string {
    let select = '';
    if (dataSet.measure) {
        const {alias, format, attribute, operation} = dataSet.measure;
        select = `${operation}(${attribute}) as total`;
    }

    return select;
}

function generateTqlWhere(dataSet): string {
    let where = '';
    const { filters } = dataSet.filters;
    for (let i=0; i <  filters.length; i++) {
        const {attribute, operation, value} = filters[i];
        where + ` ${attribute}`;
    }
    return where;
    
}
