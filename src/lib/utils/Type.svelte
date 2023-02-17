<p class={typeStyle}><slot/></p>

<script lang="ts">
  import { css } from '@emotion/css';
  import { colors, propResponsive, type PropResponsive } from '$lib/styles/utils';

  export let color = colors.black;
  export let size: PropResponsive = '1rem';
  export let weight = '400';

  const typeStyle = css`
    font-family: futura-pt, sans-serif;
    color: ${color};
    ${propResponsive('font-size', size)}
    font-weight: ${weight};
    white-space: nowrap;
  `;
</script>
