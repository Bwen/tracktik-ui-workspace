<script lang="ts">
    import Map from '$components/ext/Map.svelte';
    import Link from '$components/ext/Link.svelte';
    import Modal from '$components/ext/Modal.svelte';
    import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
    import Input from '$components/ext/form/Input.svelte';
	import Accordion from '$components/ext/Accordion.svelte';
    
    // FIXME: Conumdrum here, in dev vs prod, does not import the same way...
    import { formatAddress } from 'localized-address-format';
    //const { formatAddress } = formatAddressPkg;

    export let countryName = '';
    export let postalCountry = '';
    export let administrativeArea = '';
    export let locality = '';
    export let postalCode = '';
    export let organization = '';
    export let name = '';
    export let addressLinesString = '';

    let address = [];
    $: {
        address = formatAddress({
            postalCountry,
            administrativeArea,
            locality,
            postalCode,
            organization,
            name,
            addressLines: addressLinesString.split('|'),
        });

        if (countryName) {
            address.push(countryName);
        }
    }
</script>

<div class="wrapper-address">
    <address>{address.join("\n")}</address>
</div>

<style lang="css">
    .wrapper-address :global(.wrapper-link) {
        position: absolute;
        left: 2.5em;
        bottom: .5em;
    }

    .wrapper-address address {
        white-space: pre;
    }
</style>