<p class={titleStyle}><slot/></p>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, propResponsive, type responsiveSize } from '$lib/styles/utils';

  export let color = colors.black;
  export let subcolor = colors.orange;
  export let size: responsiveSize = '1.875rem';
  export let weight = '700';

  const titleStyle = css`
    position: relative;
    font-family: futura-pt-bold, toppan-bunkyu-midashi-go-std, sans-serif;
    color: ${color};
    ${propResponsive('font-size', size)}
    font-weight: ${weight};
    white-space: nowrap;
    margin-right: auto;

    &::first-letter {
      color: ${subcolor};
    }

    &:after {
      content: "";
      background-color: ${color};
      position: absolute;
      width: calc(1em * 2);
      height: 3px;
      top: calc(1ch + 20px);
      left: 0;
    }
  `;
</script>
