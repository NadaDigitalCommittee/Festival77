<div class={wrapperStyle} bind:clientWidth={width} bind:clientHeight={height}>
  <img
    class={imgStyle}
    src={src}
    alt={image.title}
  >
</div>
<svelte:window on:resize={updateImage}/>

<script context="module" lang="ts">
  export type ImageSource = {
    title: string;
    file: {
      url: string;
    };
  };
</script>

<script lang="ts">  // ESLintのためのコメント
  import { css } from '@emotion/css';
  import { onMount } from 'svelte';

  export let image: ImageSource;
  let src: string;
  let width: number;
  let height: number;
  let size: number;

  const updateImage = () => {
    if (width !== size) {
      src = `${image.file.url}?fm=webp&w=${width}&h=${height}&f=center&fit=fill`;
      size = width;
    }
  };

  onMount(() => {
    updateImage();
  });

  const wrapperStyle = css`
    display: block;
    width: 100%;
    height: 100%;
  `;

  const imgStyle = css`
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `;
</script>
