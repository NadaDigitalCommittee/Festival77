<p class={titleStyle}><slot/></p>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, propResponsive, type responsiveSize } from '$lib/styles/utils';

  export let color = colors.black;
  export let subcolor = colors.orange;
  export let size: responsiveSize = '2.25rem';
  export let weight = '700';

  const titleStyle = css`
    position: relative;
    font-family: futura-pt, toppan-bunkyu-midashi-go-std, sans-serif;
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
      width: 4.5rem;
      height: 3px;
      top: 115%;
      left: 0;
    }
  `;
</script>
