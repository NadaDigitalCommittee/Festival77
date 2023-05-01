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
      size: '20MB',
      image: {
        title: 'パンフレット',
        file: {
          url: '//images.ctfassets.net/hubd8luulwsv/7rZCPWtwkvpb5Uqjj3igq/a0eede423c4891036b479d55492bc65b/pamphlet.png',
        },
      },
    },
    {
      name: '校内マップ',
      file: 'map.pdf',
      size: '122KB',
      image: {
        title: '校内マップ',
        file: {
          url: '//images.ctfassets.net/hubd8luulwsv/6NkJCalQWU9Puef9n0Kbk/63e433c78ae3238f6940328286cf000e/map.png',
        },
      },
    },
    {
      name: 'バリアフリーマップ',
      file: 'accessibility_map.pdf',
      size: '160KB',
      image: {
        title: 'バリアフリーマップ',
        file: {
          url: '//images.ctfassets.net/hubd8luulwsv/552408CFJaZEEX6c6PBSGY/1b8d3165f0dc57db50d4a219ef217ebe/accmap.png',
        },
      },
    },
    {
      name: 'ガイドライン',
      file: 'guidelines.pdf',
      size: '417KB',
      image: {
        title: 'ガイドライン',
        file: {
          url: '//images.ctfassets.net/hubd8luulwsv/1sf9XhYwyBxADKPHVQurqP/032f4adf907e1e14eb15c3dee9ed74f8/guidelines.png',
        },
      },
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
