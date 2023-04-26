<MakeHead name="ダウンロード" description="第77回灘校文化祭「Splash!」のパンフレットや校内マップなどのダウンロードページです。" />
<div class={containerStyle}>
  <Title size={['4rem', '3rem']}>DOWNLOAD</Title>
  <div class={listStyle}>
    {#each items as item}
      <Item {item}></Item>
    {/each}
  </div>
  <Request/>
</div>

<script lang="ts">
  import { css } from '@emotion/css';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import Title from '$lib/utils/Title.svelte';
  import Item, { type DownloadItem } from '$lib/download/Item.svelte';
  import Request from '$lib/download/Request.svelte';
  import { responsive } from '$lib/styles/utils';

  const items: DownloadItem[] = [
    {
      name: 'パンフレット',
      file: 'pamphlet.pdf',
      size: '?.?MB',
    },
    {
      name: '校内マップ',
      file: 'map.pdf',
      size: '?.?MB',
    },
    {
      name: 'パンフレット',
      file: 'pamphlet.pdf',
      size: '?.?MB',
    },
    {
      name: '校内マップ',
      file: 'map.pdf',
      size: '?.?MB',
    },
  ];

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${responsive(`
      width: 1050px;
      margin-left: calc(50% - 525px);
      margin-top: 100px;
      margin-bottom: 100px;
    `, `
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-top: 35px;
      margin-bottom: 35px;
    `)}
  `;

  const listStyle = css`
    display: flex;
    width: 100%;

    ${responsive(`
      margin-top: 90px;
      flex-wrap: wrap;
      justify-content: space-between;
    `, `
      margin-top: 50px;
      flex-direction: column;
      gap: 10px;
    `)}
  `;
</script>
