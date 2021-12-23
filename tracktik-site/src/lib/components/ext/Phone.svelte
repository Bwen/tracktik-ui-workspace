<script lang="ts">
    import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
    import Fa from 'svelte-fa/src/fa.svelte';
    import parsePhoneNumber from 'libphonenumber-js';
    import type { CountryCode } from 'libphonenumber-js';

    export let phone: string;
    export let defaultCountry: CountryCode;
    export let country: CountryCode|undefined = undefined;
    export let icon: IconDefinition = null;

    $: {
        if (phone) {
            let phoneInfo = parsePhoneNumber(phone, country || defaultCountry);
            if (phoneInfo) {
                phone = phoneInfo.formatNational();
            }
        }
    }
</script>

{#if phone}
<div class="wrapper-phone"><div class="phone">{#if icon}<span class="phone-icon"><Fa icon={icon} /></span>{/if}<span>{phone}</span></div></div>
{/if}

<style lang="css">
    .phone-icon {
        margin-right: .5em;
    }
</style>