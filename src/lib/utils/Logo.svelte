<img class={imgStyle} alt="{style} logo" src="{base}/img/logos/logo-{style}.svg" />

<script lang="ts">
  import { base } from '$app/paths';
  import { css } from '@emotion/css';

  export let style = 'standard';
  export let size = '120px';

  const imgStyle = css`
    width: ${size};
  `;
</script>
