<div class={wrapperStyle} bind:clientWidth={width} bind:clientHeight={height}>
  <img
    class={imgStyle}
    src="{image.file.url}?fm=webp&w={isMobile() ? width * 2 : width}&h={isMobile() ? height * 2 : height}&f=center&fit=fill"
    loading="lazy"
    alt={image.title}
  >
</div>

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
  import { browser } from '$app/environment';

  export let image: ImageSource;
  let width: number;
  let height: number;

  const isMobile = () => (browser ? window.ontouchstart === null : false);

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
