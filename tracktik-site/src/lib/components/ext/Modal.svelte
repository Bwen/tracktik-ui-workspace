<script lang="ts">
    let active;
    let modal;
    
    function handleKeydown(event){
        if(event.key=="Escape") {
            close();
        } 
    }

    export function open() {
        if (active)  return;

        active = true;
        document.body.appendChild(modal);
    }

    export function close() {
        if (!active)  return;

        active = false;
    }
</script>
<svelte:head>
{#if active}
    <style type="text/css">
        body {
            overflow: hidden;
        }

        #svelte {
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

<div class="overlay-modal" class:active bind:this={modal} on:click={()=>close()}>
    <div class="wrapper-modal" on:click|stopPropagation={()=>{}}>
        <div class="wrapper-content"><div class="content">
            <slot />
        </div></div>
    </div>
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