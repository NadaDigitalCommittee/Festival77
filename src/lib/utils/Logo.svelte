<div class={containerStyle}>
  <img class={imgStyle} alt="{style} logo" src="{base}/img/logos/{style}.svg" />
  {#if hover}
    <img class={altStyle} alt="{style} logo" src="{base}/img/logos/{hover}.svg">
  {/if}
</div>

<script lang="ts">
  import { base } from '$app/paths';
  import { propResponsive, type responsiveSize } from '$lib/styles/utils';
  import { css } from '@emotion/css';

  export let style = 'standard';
  export let size: responsiveSize = '120px';
  export let hover: string | null = null;

  const imgStyle = css`
    ${propResponsive('width', size)}
    opacity: 1;
    transition: opacity 0.5s ease;
  `;

  const altStyle = css`
    ${propResponsive('width', size)}
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;

  const containerStyle = css`
    position: relative;
    height: max-content;
    transition: transform 0.5s ease;

    ${hover ? `
      &:hover {
        transform: translateY(2px);

        .${imgStyle} {
          opacity: 0;
        }

        .${altStyle} {
          opacity: 1;
        }
      }
    ` : ''}
  `;
</script>
