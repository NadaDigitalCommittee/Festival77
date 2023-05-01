<div class={itemStyle}>
  <div class={imageStyle}>
    {#if item.image}
      <AssetImage image={item.image}/>
    {/if}
  </div>
  <div class={innerStyle}>
    <p class={nameStyle}>{item.name}</p>
    <a href="{base}/data/pdf/{item.file}" download={item.file} class={buttonStyle}>
      <p class={textStyle}>ダウンロード<span class={sizeStyle}>({item.size})<span></p>
      <img class={imgStyle} src="{base}/img/assets/download.svg" alt="ダウンロード">
    </a>
  </div>
</div>

<script context="module" lang="ts">
  import type { ImageSource } from '$lib/utils/AssetImage.svelte';

  export type DownloadItem = {
    name: string;
    file: string;
    size: string;
    image?: ImageSource;
  };
</script>

<script lang="ts">  // ESLintのためのコメント
  import { css } from '@emotion/css';
  import { colors, responsive } from '$lib/styles/utils';
  import AssetImage from '$lib/utils/AssetImage.svelte';
  import { base } from '$app/paths';

  export let item: DownloadItem;

  const itemStyle = css`
    background-color: ${colors.white};
    overflow: hidden;

    ${responsive(`
      position: relative;
      width: 15rem;
      height: 18.75rem;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
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
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    `)}

  `;

  const imageStyle = css`
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

  const buttonStyle = css`
    width: calc(100% + 10px);
    margin-left: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background-color: ${colors.darkgray};
    ${responsive(`
      padding: 11px 0;
      margin-bottom: 10px;
      gap: 8px;
    `, `
      padding: 9px 0;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
      gap: 10px;
    `)}
  `;

  const textStyle = css`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: ${colors.white};
  `;

  const sizeStyle = css`
    font-size: 0.64rem;
  `;

  const imgStyle = css`
    ${responsive(`
      width: 0.85rem;
    `, `
      width: 0.7rem;
    `)}
  `;
</script>
