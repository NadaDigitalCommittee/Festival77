<div class={itemStyle}>
  <div class={dummyStyle}/>
  <div class={innerStyle}>
    <p class={nameStyle}>{item.name}</p>
    {#if item.description}
      <p class={descriptionStyle}>{item.description}</p>
    {/if}
    <p class={priceStyle}>{item.price}<span class={yenStyle}>円</span></p>
  </div>
</div>

<script context="module" lang="ts">
  export type GoodsItem = {
    name: string;
    description?: string;
    price: number;
    plannedByStudents: boolean;
  };
</script>

<script lang="ts">  // ESLintのためのコメント
  import { css } from '@emotion/css';
  import { colors, responsive } from '$lib/styles/utils';

  export let item: GoodsItem;

  const itemStyle = css`
    background-color: ${colors.white};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    ${responsive(`
      position: relative;
      width: 15rem;
      height: 18.75rem;
      border-radius: 40px;

      &::after {
        content: "";
        position: absolute;
        top: calc(11.25rem - 4px);
        left: 0;
        width: 100%;
        height: 8px;
        background-color: ${colors.navy};
      }
    `, `
      display: flex;
      width: 100%;
      height: 5.625rem;
      border-radius: 30px;
    `)}

  `;

  const dummyStyle = css`
    width: 100%;
    height: 11.25rem;
    background-color: ${colors.lightgray};

    ${responsive(`
      width: 100%;
      height: 11.25rem;
    `, `
      width: 7.5rem;
      height: 100%;
    `)}
  `;

  const innerStyle = css`
    position: relative;

    ${responsive(`
      width: calc(100% - 60px);
      height: calc(100% - 11.25rem - 32px);
      margin: 16px 30px;
    `, `
      width: calc(100% - 7.5rem - 41px);
      height: calc(100% - 28px);
      margin: 14px 25px 14px 16px;
    `)}
  `;

  const nameStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${colors.black};
  `;

  const descriptionStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    overflow-wrap: break-word;
    word-break: keep-all;
    color: ${colors.black};
    margin-top: 5px;
  `;

  const priceStyle = css`
    position: absolute;
    font-family: urw-din, sans-serif;
    font-weight: 600;

    ${responsive(`
      right: 16px;
      bottom: 0;
      font-size: 2rem;
    `, `
      right: 0;
      bottom: 0;
      font-size: 1.5rem;
    `)}

    color: ${colors.black};
  `;

  const yenStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;

    ${responsive(`
      font-size: 1rem;
    `, `
      font-size: 0.75rem;
    `)}
  `;
</script>
