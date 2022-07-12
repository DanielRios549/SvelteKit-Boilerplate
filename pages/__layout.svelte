<script lang="ts">
    import { onMount } from 'svelte'
    import { theme } from '$/stores/theme'

    $: ready = !import.meta.env.DEV

    onMount(() => {
        document.body.classList.add($theme)
        ready = true
    })
</script>

<slot/>

<style lang="scss" global>
    @use "../styles/app.scss";
</style>