<script lang="ts">
    import { fetchResults } from '$dataLab/DataView';

    export let dataView;
    const { color } = dataView.configs.options;

    let result;
    (async () => result = await fetchResults(dataView.configs.dataSet))();
    //console.log('SingleCounter DataSet: ', dataSet);
</script>

<div class="wrapper-datalab-widget"><div class="single-counter" style="background-color: {color};">
    test
</div></div>

<style lang="scss">
    .wrapper-datalab-widget {
        width: 150px;

        .single-counter {
            padding: 8px;
        }
    }
</style>