<div class={wrapperStyle} bind:clientWidth={width}>
  <img
    class={imgStyle}
    src="{href}?fm=webp&w={width}"
    loading="lazy"
    alt={text}
  >
</div>

<script lang="ts">
  import { css } from '@emotion/css';

  export let href = '';
  export let text = '';
  let width: number;

  const wrapperStyle = css`
    display: block;
    width: 80%;
    margin: 20px 10%;
  `;

  const imgStyle = css`
    display: block;
    width: 100%;
    height: 100%;
  `;
</script>
