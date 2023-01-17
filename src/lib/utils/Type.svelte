<p class={typeStyle}><slot/></p>

<script lang="ts">
  import { css } from '@emotion/css';

  export let color = '#000000';
  export let size = '1rem';
  export let weight = '400';

  const typeStyle = css`
    font-family: futura-pt, sans-serif;
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};
    white-space: nowrap;
  `;
</script>
