<img class={imgStyle} alt="{style} logo" src="{base}/img/logos/{style}.svg" />

<script lang="ts">
  import { base } from '$app/paths';
  import { propResponsive, type PropResponsive } from '$lib/styles/utils';
  import { css } from '@emotion/css';

  export let style = 'standard';
  export let size: PropResponsive = '120px';

  const imgStyle = css`
    ${propResponsive('width', size)}
  `;
</script>
