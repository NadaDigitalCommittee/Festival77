<ComingSoon/>
<p>{JSON.stringify(data)}</p>

<script lang="ts">
  import ComingSoon from '$lib/utils/ComingSoon.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>
