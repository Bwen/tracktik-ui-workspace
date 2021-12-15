<script lang="ts">
    export let isLoading: boolean = false;
</script>

<div class="wrapper-loading {isLoading ? 'active' : ''}">
    <div class="bar">
        <div class="inner-bar">&nbsp;</div>
    </div>
</div>

<style lang="css">
    .wrapper-loading {
        display:none;
        width: 100%;
    }

    .wrapper-loading.active {
        display: block;
    }

    .wrapper-loading.active .inner-bar {
        animation: load .75s linear infinite;
    }

    .bar {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border:none;
    }

    .inner-bar {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #DDD;
        left: 0;
    }

    @keyframes load{
        0% { left: -100%; }
        100%{ left: 100%; }
    }
</style>
