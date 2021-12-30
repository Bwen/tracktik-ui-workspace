<script lang="ts">
	import { onMount } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import type { SnackbarItem } from '$lib/stores/snack-bar';
    import { browser } from '$app/env';
    import { SnackType, items as snackItems } from '$lib/stores/snack-bar';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faCheckCircle, faInfoCircle, faExclamationTriangle, faSkull, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
    
    snackItems.subscribe(items => {
        for (let i=0; i < items.length; i++) {
            if (items[i].id) {
                continue;
            }

            items[i] = initItem(items[i]);
            setTimeout(() => showItem(items[i]), 250);
        }
    });

    function initItem(item: SnackbarItem) {
        item.id = uuidv4();
        item.duration = item.duration ?? 2000;
        item.type = item.type ?? SnackType.None;
        return item;
    }

    function getIcon(item: SnackbarItem) {
        if (item.icon) {
            return item.icon;
        }

        switch (item.type) {
            case SnackType.None:
                return faInfoCircle;
            case SnackType.Success:
                return faCheckCircle;
            case SnackType.Warning:
                return faExclamationTriangle;
            case SnackType.Error:
                return faSkull;
            case SnackType.Info:
                return faExclamationCircle;
        }
    }

    let wrapperSnackbar;
	onMount(() => {
        if (!browser || !wrapperSnackbar) return;

        document.body.appendChild(wrapperSnackbar);
    });

    function showItem(item) {
        if (!browser) return;

        let snackItem = document.querySelector(`[id="${item.id}"]`);
        snackItem.classList.add('active');
        setTimeout(() => deleteItem(snackItem), item.duration);
    }

    function deleteItem(snackItem) {
        snackItem.classList.remove('active');
        setTimeout(() => {
            if (!browser) return;

            let removeIndexes = [];
            for (let i=0; i < $snackItems.length; i++) {
                if ($snackItems[i].id === snackItem.id) {
                    removeIndexes.push(i);
                }
            }
            
            for (let i=0; i < removeIndexes.length; i++) {
                $snackItems.splice(i, 1);
            }

            $snackItems = $snackItems;
        }, 5000);
    }

    function onMouseMove(event) {
        if (!browser || !wrapperSnackbar) return;
        
        const xOffset = 30;
        const yOffset = 50;
        let X = event.clientX + window.scrollX + xOffset;
        let Y = event.clientY + window.scrollY - yOffset;
        const boundaries = wrapperSnackbar.getBoundingClientRect();
        if ((X + boundaries.width) > window.innerWidth) {
            X -= (boundaries.width + (xOffset * 2));
        }
        wrapperSnackbar.style.top = `${Y}px`;
        wrapperSnackbar.style.left = `${X}px`;
    }
</script>

<svelte:window on:mousemove={onMouseMove} />

<div class="wrapper-snackbar" bind:this={wrapperSnackbar}><div class="snackbar-items">
    <ul>
    {#each $snackItems as item}
        <li id={item.id} class="{item.type}">
            {#if item.icon || item.type != SnackType.None}<div class="icon"><Fa icon={getIcon(item)} /></div>{/if}
            <div class="text">{@html item.text}</div>
        </li>
    {/each}
    </ul>
</div></div>

<style lang="css">
    .wrapper-snackbar {
        position: absolute;
        z-index: 6000;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column-reverse;
        width: auto;
    }

    ul, ul li {
        padding: 0;
        margin: 0;
    }

    ul li .icon {
        font-size: 1.5em;
    }

    ul li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5em;

        max-width: 300px;
        margin: .25em;
        padding: .5em;
        opacity: 0;
        transform: translateY(150px);
        transition:
            opacity .5s ease-in-out,
            transform .5s ease-in-out
        ;
    }

    ul :global(li.active) {
        opacity: 1;
        transform: translateY(0px);
        transition: 
            opacity .5s ease-in-out,
            transform .5s ease-in-out
        ;
    }
</style>
