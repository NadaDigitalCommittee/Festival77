<div class={wrapperStyle} bind:clientWidth={width} bind:clientHeight={height}>
  <img
    class={imgStyle}
    src="{image.file.url}?fm=webp&w={width}&h={height}&f=center&fit=fill"
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

  export let image: ImageSource;
  let width: number;
  let height: number;

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
