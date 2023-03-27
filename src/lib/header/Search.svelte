<div class={containerStyle}>
  <img class={imgStyle} alt="search" src="{base}/img/assets/search.svg" />
</div>

<script lang="ts">
  import { base } from '$app/paths';
  import { colors, responsive } from '$lib/styles/utils';
  import { css } from '@emotion/css';

  const containerStyle = css`
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: calc(100% - 3px);
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${colors.black};
      transition: width 0.25s ease, left 0.25s ease;
    }

    &:hover {
      &::after {
        width: 50%;
        left: 25%;
      }
    }
  `;

  const imgStyle = css`
    ${responsive(`
      width: calc(1.75rem + 20px);
    `, `
      width: calc(1.5rem + 20px);
    `)}
    padding: 10px;
  `;
</script>
