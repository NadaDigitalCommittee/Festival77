<p class={titleStyle}><slot/></p>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, propResponsive, type responsiveSize } from '$lib/styles/utils';

  export let color = colors.navy;
  export let size: responsiveSize = '4rem';
  export let weight = '700';

  const titleStyle = css`
    position: relative;
    font-family: futura-pt-bold, sans-serif;
    color: ${color};
    ${propResponsive('font-size', size)}
    font-weight: ${weight};
    white-space: nowrap;

    &:after {
      content: "";
      background-color: ${color};
      position: absolute;
      width: 4.5rem;
      height: 3px;
      top: 100%;
      left: calc(50% - 2.25rem);
    }
  `;
</script>
