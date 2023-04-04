<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <meta property="og:url" content={$page.url.toString()}>
</svelte:head>

<script lang="ts">  // headを生成する
  import { page } from '$app/stores';

  export let name: string | null = null;
  export let description: string;

  const baseTitle = '第77回灘校文化祭「Splash!」';
  const title = name ? `${name} | ${baseTitle}` : baseTitle;
</script>
