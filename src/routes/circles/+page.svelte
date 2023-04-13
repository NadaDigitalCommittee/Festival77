<MakeHead name="サークル" description="第77回灘校文化祭「Splash!」に出展するクラブ・サークルの一覧です。部誌や動画も公開しています。(準備中)" />
<div>
    {#each items2 as item}
      <Item circle={item} />
    {/each}
</div>
<script lang="ts">
  import type { PageData } from './$types';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import Item, { type Circle } from '$lib/circles/Item.svelte';
  export let data: PageData;
  const items2 = data.items as Circle[];
</script>