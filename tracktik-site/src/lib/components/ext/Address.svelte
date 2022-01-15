<script lang="ts">
    import PostalAddress from 'i18n-postal-address'

    export let countryName = '';
    export let postalCountry = '';
    export let administrativeArea = '';
    export let locality = '';
    export let postalCode = '';
    export let organization = '';
    export let name = '';
    export let addressLinesString = '';

    let address = new PostalAddress();
    $: {
        const addressLines = addressLinesString.split('|');
        address.setAddress1(addressLines[0]);
        address.setAddress2(addressLines[1]);
        address.setCompanyName(organization);
        address.setFirstLastName(name);
        address.setPostalCode(postalCode);
        address.setCity(locality);
        address.setRegion(administrativeArea);
        address.setState(administrativeArea);
        address.setProvince(administrativeArea);
        address.setCountry(countryName);
    }
</script>

<div class="wrapper-address">
    <address>{address.toString()}</address>
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
