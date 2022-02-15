<script lang="ts">
    import { onDestroy } from 'svelte';
    import { modal as modalComponent, props as modalProps } from '$lib/stores/modal';

    let active = false;
    modalComponent.subscribe((value) => {
        if (!value) {
            active = false;
            return;
        }

        active = true;
    });

    function handleKeydown(event){
        if(event.key=="Escape") {
            active = false;
        } 
    }

    function onModalClick(event) {
        let modalContent = event.target.closest('.wrapper-content');
        if (modalContent) {
            return;
        }
        
        event.preventDefault();
        active = false;
    }

    onDestroy(() => {
        $modalComponent = undefined;
        $modalProps = {};
    });
</script>
<svelte:head>
{#if active}
    <style type="text/css">
        body {
            overflow: hidden;
        }

        #svelte-main {
            -webkit-filter: blur(2.5px);
            -moz-filter: blur(2.5px);
            -o-filter: blur(2.5px);
            -ms-filter: blur(2.5px);
            filter: blur(2.5px);
        }
    </style>
{/if}
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<div class="overlay-modal" class:active on:mouseup={onModalClick}>
    <div class="wrapper-modal"><div class="wrapper-content"><div class="content">
        {#if $modalComponent}<svelte:component this={$modalComponent} {...$modalProps} />{/if}
    </div></div></div>
</div>

<style lang="css">
    .overlay-modal {
        height: 100%;
        width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
        background-color: rgba(0, 0, 0, .6);
		visibility: hidden;
		z-index: 5000;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
    }
    
    .overlay-modal.active {
        visibility: visible;
    }
</style>