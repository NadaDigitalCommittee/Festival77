<MakeHead name="グッズ" description="第77回灘校文化祭「Splash!」にて販売される灘校グッズの一覧です。(準備中)" />
<ComingSoon/>
<p>{JSON.stringify(data)}</p>

<script lang="ts">
  import ComingSoon from '$lib/utils/ComingSoon.svelte';
  import type { PageData } from './$types';
  import MakeHead from '$lib/utils/MakeHead.svelte';

  export let data: PageData;
</script>
