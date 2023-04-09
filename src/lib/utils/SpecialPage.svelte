<div class={containerStyle}>
  <slot/>
</div>

<script lang="ts">
  import { colors } from '$lib/styles/utils';
  import { css } from '@emotion/css';

  const containerStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.darkgray};
    z-index: 85;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
</script>
