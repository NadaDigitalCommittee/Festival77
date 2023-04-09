<MakeHead name="グッズ" description="第77回灘校文化祭「Splash!」にて販売される灘校グッズの一覧です。" />
<div class={containerStyle}>
  <Title size={['4rem', '3rem']}>GOODS</Title>
  <div class={listStyle}>
    {#each items.filter((i) => i.type === '通常') as item}
      <Item item={item} />
    {/each}
    <p class={subtitleStyle}>生徒企画</p>
    {#each items.filter((i) => i.type === '生徒企画') as item}
      <Item item={item} />
    {/each}
    <p class={subtitleStyle}>お土産</p>
    {#each items.filter((i) => i.type === 'お土産') as item}
      <Item item={item} />
    {/each}
  </div>
</div>

<script lang="ts">
  import type { PageData } from './$types';
  import { css } from '@emotion/css';
  import Title from '$lib/utils/Title.svelte';
  import MakeHead from '$lib/utils/MakeHead.svelte';
  import Item, { type GoodsItem } from '$lib/goods/Item.svelte';
  import { colors, responsive } from '$lib/styles/utils';

  const containerStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${responsive(`
      margin-top: 100px;
    `, `
      margin-top: 35px;
    `)}
  `;

  const listStyle = css`
    margin-top: 50px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;

    ${responsive(`
      width: calc(60rem + 90px);
      gap: 50px 30px;
    `, `
      width: calc(100% - 40px);
      gap: 10px;
    `)}
  `;

  const subtitleStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    width: 100%;

    ${responsive(`
      font-size: 2.5rem;
      margin-top: 50px;
      padding-left: 35px;
    `, `
      position: relative;
      font-size: 1.5rem;
      margin-top: 25px;
      margin-bottom: 5px;
      padding: 5px 32px 10px;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 12px;
        width: 8px;
        height: 100%;
        background-color: ${colors.navy};
      }
    `)}
  `;

  export let data: PageData;

  const items = data.items as GoodsItem[];
</script>
