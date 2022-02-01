<script lang="ts">
    import { showId } from '$lib/stores/dataLab';
    import { fetchDataSets } from '$dataLab/DataView';
    import SingleCounterWidget from '$dataLab/components/SingleCounterWidget.svelte';

    export let id;

    let dataSets = [];
    (async () => dataSets = await fetchDataSets(id))();


    function getComponent(dataSet) {
        switch (dataSet.widgetType) {
            case 'SingleCounterWidget':
                return SingleCounterWidget;
                break;
        }

        console.warn(`Unsupported DataLab Widget Type "${dataSet.widgetType}"`);
        return null;
    }
    
</script>

<div class="wrapper-datalab-section" class:showId={$showId}>
    <fieldset>
        <legend>DataLab: {id}</legend>
        <div class="datalab-section">
            {#each dataSets as dataSet}
            {#if getComponent(dataSet)}<svelte:component this={getComponent(dataSet)} dataView={dataSet} />{/if}
            {/each}
        </div>
    </fieldset>
</div>

<style lang="scss">
    .wrapper-datalab-section {
        fieldset {
            padding: 0;
            border-width: 0;

            legend {
                display:none;
            }
        }
        
        &.showId {
            fieldset {
                padding: 4px;
                border-width: 1px;
                legend {
                    display: initial;
                }
            }
        }

        .datalab-section {
            display: flex;
            flex-direction: row;
            gap: 8px;
        }
    }
</style>